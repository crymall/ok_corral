class UserProfileAddition < ActiveRecord::Migration[5.0]
  def change
    drop_table :users

    create_table :users do |t|
      t.string :username, null: false
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.integer :zip, null: false
      t.integer :age, null: false
      t.string :gender, null: false
      t.string :orientation, null: false
      t.text :summary
      t.text :doing_with_life
      t.text :good_at
      t.text :fav_media
      t.text :six_things
      t.text :thinking_about
      t.text :fri_night
      t.text :message_if
      t.float :lat
      t.float :lng

      t.timestamps
    end

  add_index :users, [:username, :email], unique: true
  end
end
