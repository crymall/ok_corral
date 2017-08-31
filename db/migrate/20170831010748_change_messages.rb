class ChangeMessages < ActiveRecord::Migration[5.0]
  def change
    drop_table :messages

    create_table :messages do |t|
      t.integer :user_id, null: false
      t.integer :dialogue_id, null: false
      t.text :body, null: false

      t.timestamps
    end
  end
end
