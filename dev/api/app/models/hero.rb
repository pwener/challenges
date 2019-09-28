class Hero < ApplicationRecord
  has_one :location
  has_and_belongs_to_many :batles
  accepts_nested_attributes_for :location, :allow_destroy => true
  enum rank: { s: 0, a: 1, b: 2, c: 3 }
  validates :name, uniqueness: true, length: { in: 2..20 }
  validates :rank, presence: true
  validates :location, presence: true

  # Find a equip to fight
  def self.find_to_batle(threat_rank)
    # classify rank between threat and hero
    fight = { g: 's', s: 'a', c: 'b', w: 'c' }
    # find heros not avaliable
    busy = Hero.includes(:batles).where(batles: { finished: false })
    avaliable = Hero.where.not(id: busy)

    avaliable.where(rank: fight[threat_rank.to_sym]).first
  end
end
