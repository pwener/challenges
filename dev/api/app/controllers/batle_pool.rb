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
          @batles.delete(b) if won
          b.finished = true
          b.successful = won
          b.save
        end
        puts "Have #{@batles.size} batles"
        # waits 10 seconds
        sleep(60)
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
          sleep(10)
          release(threat)
        end
      end
    end
  end

  def all
    @batles
  end

end
