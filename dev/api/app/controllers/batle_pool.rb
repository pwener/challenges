# Responsible to manage active batle instances. Or unattended threats
# This class is based on Object Pool Pattern and avoid the costly
# synchronization with battle instances.
require 'singleton'

class BatlePool
  include Singleton

  def initialize
    # active batles
    @batles = Batle.where(finished: false).to_a

    Thread.new do
      loop do
        @batles.each do |b|
          won = [true, false].sample
          if won
            @batles.delete(b)
          else
            # New batle to new hero!
            release b.threat
          end
          b.successful = won
          b.finished = true
          b.save
        end
        puts "Have #{@batles.size} batles"
        # waits 5 min
        sleep(60 * 5)
      end
    end
  end

  # Should find a hero to fight against
  # threat. Append that one in the batles
  def release(threat)
    hero = Hero.find_to_batle(threat.rank)
    if hero
      # TODO add more one hero
      batle = Batle.create(threat: threat, heroes: [hero])
      @batles.append(batle)
    else
      # run release again in a thread mode
      Thread.new do
        Rails.application.executor.wrap do
          # waits 10 seconds
          sleep(30)
          release(threat)
        end
      end
    end
  end

  def all
    @batles
  end

end
