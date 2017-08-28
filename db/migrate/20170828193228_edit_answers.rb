class EditAnswers < ActiveRecord::Migration[5.0]
  def change
    drop_table :answers

    create_table :answers do |t|
      t.integer :answer_num, null: false
      t.string :accepted_answers, null: false
      t.integer :importance, null: false
      t.integer :question_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end

    add_index :answers, [:user_id, :question_id], unique: true
  end
end
