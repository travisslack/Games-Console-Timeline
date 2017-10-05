class AddYearReleasedToConsole < ActiveRecord::Migration[5.1]
  def change
    add_column :consoles, :released, :integer
  end
end
