# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170828174744) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.string   "zip",             null: false
    t.integer  "age",             null: false
    t.string   "gender",          null: false
    t.string   "orientation",     null: false
    t.text     "summary"
    t.text     "doing_with_life"
    t.text     "good_at"
    t.text     "fav_media"
    t.text     "six_things"
    t.text     "thinking_about"
    t.text     "fri_night"
    t.text     "message_if"
    t.string   "image_url"
    t.float    "latitude"
    t.float    "longitude"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["username", "email"], name: "index_users_on_username_and_email", unique: true, using: :btree
  end

end
