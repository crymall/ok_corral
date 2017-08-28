class CreateQuestions < ActiveRecord::Migration[5.0]
  def change
    create_table :questions do |t|
      t.string :question_text, null: false
      t.string :answer_one_text, null: false
      t.string :answer_two_text, null: false
      t.string :answer_three_text
      t.string :answer_four_text

      t.timestamps
    end
  end
end
