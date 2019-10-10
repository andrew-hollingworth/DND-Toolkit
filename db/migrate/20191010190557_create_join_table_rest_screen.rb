class CreateJoinTableRestScreen < ActiveRecord::Migration[6.0]
  def change
    create_join_table :rests, :screens do |t|
      # t.index [:rest_id, :screen_id]
      # t.index [:screen_id, :rest_id]
    end
  end
end
