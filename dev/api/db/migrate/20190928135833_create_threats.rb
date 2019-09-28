class CreateThreats < ActiveRecord::Migration[5.2]
  def change
    create_table :threats do |t|
      t.string :name
      t.string :rank
      t.references :location

      t.timestamps
    end
  end
end
