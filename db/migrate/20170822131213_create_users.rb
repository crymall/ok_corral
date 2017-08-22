class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :email, null: false
      t.string :password_digest, null: false
      t.integer :zip, null: false
      t.integer :age, null: false
      t.string :gender, null: false
      t.string :orientation, null: false

      t.timestamps
    end

    add_index :users, [:username, :email], unique: true
  end
end
