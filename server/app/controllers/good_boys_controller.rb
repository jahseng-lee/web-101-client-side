class GoodBoysController < ApplicationController
  def random
    @good_boy = GoodBoy.order("RANDOM()").first

    render json: {
      img_url: "images/#{@good_boy.img_url}"
    }
  end
end
