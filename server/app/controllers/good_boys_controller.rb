class GoodBoysController < ApplicationController
  def random
    @good_boy = GoodBoy.order("RANDOM()").first

    render json: @good_boy
  end
end
