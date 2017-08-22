Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: {format: JSON} do
    resources :users, only: [:create, :index]
    resource :session, only: [:create, :destroy]
  end

end
