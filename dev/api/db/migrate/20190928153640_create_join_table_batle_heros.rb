class CreateJoinTableBatleHeros < ActiveRecord::Migration[5.2]
  def change
    create_join_table :batles, :heros do |t|
      t.index [:batle_id, :hero_id]
      t.index [:hero_id, :batle_id]
    end
  end
end
