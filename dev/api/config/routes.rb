Rails.application.routes.draw do
  # just for test
  devise_for :admins, only: [:sign_in]

  # Api definition
  resources :admins, only: [:show, :create, :update, :destroy]
  resources :heroes, controller: :hero

  post     '/login', to: 'sessions#create'
  delete   '/logout', to: 'sessions#destroy'
end
