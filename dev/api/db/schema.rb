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

ActiveRecord::Schema.define(version: 2019_09_29_195700) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "admins", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "login", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "auth_token"
    t.index ["auth_token"], name: "index_admins_on_auth_token", unique: true
    t.index ["email"], name: "index_admins_on_email", unique: true
    t.index ["reset_password_token"], name: "index_admins_on_reset_password_token", unique: true
  end

  create_table "batles", force: :cascade do |t|
    t.bigint "threat_id"
    t.boolean "finished", default: false
    t.boolean "successful", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["threat_id"], name: "index_batles_on_threat_id"
  end

  create_table "batles_heros", id: false, force: :cascade do |t|
    t.bigint "batle_id", null: false
    t.bigint "hero_id", null: false
    t.index ["batle_id", "hero_id"], name: "index_batles_heros_on_batle_id_and_hero_id"
    t.index ["hero_id", "batle_id"], name: "index_batles_heros_on_hero_id_and_batle_id"
  end

  create_table "heros", force: :cascade do |t|
    t.string "name"
    t.integer "rank"
    t.bigint "location_id"
    t.index ["location_id"], name: "index_heros_on_location_id"
  end

  create_table "locations", force: :cascade do |t|
    t.decimal "latitude", precision: 5, scale: 2, default: "0.0"
    t.decimal "longitude", precision: 5, scale: 2, default: "0.0"
    t.bigint "hero_id"
    t.bigint "threat_id"
    t.index ["hero_id"], name: "index_locations_on_hero_id"
    t.index ["threat_id"], name: "index_locations_on_threat_id"
  end

  create_table "threats", force: :cascade do |t|
    t.string "name"
    t.integer "rank"
    t.bigint "location_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["location_id"], name: "index_threats_on_location_id"
  end

  add_foreign_key "heros", "locations"
  add_foreign_key "locations", "heros"
  add_foreign_key "locations", "threats"
end
