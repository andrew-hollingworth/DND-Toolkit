class CreateJoinTableScreenCondition < ActiveRecord::Migration[6.0]
  def change
    create_join_table :screens, :conditions do |t|
      # t.index [:screen_id, :condition_id]
      # t.index [:condition_id, :screen_id]
    end
  end
end
