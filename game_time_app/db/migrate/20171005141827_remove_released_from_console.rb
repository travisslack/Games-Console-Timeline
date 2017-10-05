class RemoveReleasedFromConsole < ActiveRecord::Migration[5.1]
  def change
    remove_column :consoles, :released
  end
end
