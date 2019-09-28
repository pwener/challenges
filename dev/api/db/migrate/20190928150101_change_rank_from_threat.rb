class ChangeRankFromThreat < ActiveRecord::Migration[5.2]
  def change
    change_column :threats, :rank, :integer, using: 'rank::integer'
  end
end
