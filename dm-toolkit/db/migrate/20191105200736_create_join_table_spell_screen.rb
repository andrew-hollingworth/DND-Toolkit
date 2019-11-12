class CreateJoinTableSpellScreen < ActiveRecord::Migration[6.0]
  def change
    create_join_table :spells, :screens do |t|
      # t.index [:spell_id, :screen_id]
      # t.index [:screen_id, :spell_id]
    end
  end
end
