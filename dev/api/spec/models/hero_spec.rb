require 'rails_helper'

RSpec.describe Hero, type: :model do
  let(:hero)  { FactoryBot.build :hero }
  let(:ihero) { FactoryBot.build(:hero, name: 'S', rank: 1) }

  it 'when is valid' do
    expect(hero).to be_valid
  end

  it 'when has a invalid name' do
    expect(ihero).to_not be_valid
  end
end
