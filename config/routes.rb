Rails.application.routes.draw do
  get 'static_pages/root' => 'static_pages#root'
  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
