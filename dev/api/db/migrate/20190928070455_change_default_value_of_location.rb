class ChangeDefaultValueOfLocation < ActiveRecord::Migration[5.2]
  def change
    change_column_default :locations, :latitude, 0
    change_column_default :locations, :longitude, 0
  end
end
