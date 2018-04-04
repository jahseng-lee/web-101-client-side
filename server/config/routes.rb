Rails.application.routes.draw do
  resources :good_boys do
    collection do
      get :random
    end
  end
end
