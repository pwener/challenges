class AddThreatToLocation < ActiveRecord::Migration[5.2]
  def change
    add_reference :locations, :threats, foreign_key: true
  end
end
