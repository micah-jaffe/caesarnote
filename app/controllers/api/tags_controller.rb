class Api::TagsController < ApplicationController
  before_action :require_login

  def index
    @tags = current_user.tags
    render :index
  end

  def create
    @tag = Tag.new(tag_params)

    if @tag.save
      render :show
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end

  def destroy
    @tag = Tag.find(params[:id])
    @tag.destroy!
    render :show
  end


  def tag_params
    params.require(:tag).permit(:name)
  end
end
