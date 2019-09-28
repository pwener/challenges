class RenameRelationLocationFromThreat < ActiveRecord::Migration[5.2]
  def change
    remove_column :locations, :threats_id
    add_reference :locations, :threat, foreign_key: true
  end
end
