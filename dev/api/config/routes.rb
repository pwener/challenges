Rails.application.routes.draw do
  devise_for :admins
  # Api definition
  resources :admins, only: [:show, :create, :update, :destroy]

  post     '/login', to: 'sessions#create'
  delete   '/logout', to: 'sessions#destroy'
end
