class CreateBatles < ActiveRecord::Migration[5.2]
  def change
    create_table :batles do |t|
      t.references :threat, foreign_key: false
      t.boolean :finished
      t.boolean :successful

      t.timestamps
    end
  end
end
