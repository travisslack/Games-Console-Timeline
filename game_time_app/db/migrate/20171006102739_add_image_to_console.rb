class AddImageToConsole < ActiveRecord::Migration[5.1]
  def change
    add_column :consoles, :image, :string
  end
end
