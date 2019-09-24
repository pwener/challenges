class AddAuthenticationTokenToAdmins < ActiveRecord::Migration[5.2]
  def change
    add_column :admins, :auth_token, :string
    add_index :admins, :auth_token, unique: true
  end
end
