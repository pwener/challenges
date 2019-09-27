class RemoveTimestampFromLocation < ActiveRecord::Migration[5.2]
  def change
    remove_column :locations, :created_at, :datetime
    remove_column :locations, :updated_at, :datetime
  end
end
