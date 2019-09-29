class ChangeDefaultValuesOfBatle < ActiveRecord::Migration[5.2]
  def change
    change_column_default :batles, :finished, 0
    change_column_default :batles, :successful, 0
  end
end
