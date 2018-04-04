class CreateGoodBoys < ActiveRecord::Migration[5.1]
  def change
    create_table :good_boys do |t|
      t.string :img_url

      t.timestamps
    end
  end
end
