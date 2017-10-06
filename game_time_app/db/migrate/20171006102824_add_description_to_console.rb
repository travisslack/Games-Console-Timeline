class AddDescriptionToConsole < ActiveRecord::Migration[5.1]
  def change
    add_column :consoles, :description, :text
  end
end
