Rails.application.routes.draw do

  namespace :api, defaults: {format: JSON} do
    resources :users, only: [:create, :index]
    resource :session, only: [:create, :destroy]
  end

end
