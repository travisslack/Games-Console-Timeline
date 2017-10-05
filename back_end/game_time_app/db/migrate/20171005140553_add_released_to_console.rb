class AddReleasedToConsole < ActiveRecord::Migration[5.1]
  def change
    add_column :consoles, :released, :date
  end
end
