class ChangeThreadsToDialogues < ActiveRecord::Migration[5.0]
  def change
    drop_table :threads

    create_table :dialogues do |t|
      t.integer :user_one_id, null: false
      t.integer :user_two_id, null: false

      t.timestamps
    end

    add_index :dialogues, [:user_one_id, :user_two_id], unique: true
  end
end
