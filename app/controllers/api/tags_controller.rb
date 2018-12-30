class Api::TagsController < ApplicationController
  before_action :require_login

  def index
    @tags = current_user.tags
    render :index
  end

  def create
    note = Note.find(params[:note_id])
    existing_tag = current_user.tags.find_by_name(params[:tag][:name])

    if existing_tag
      @note_tag = note.note_tags.new(tag_id: existing_tag.id)
      @tag = existing_tag

      if @note_tag.save
        render :show 
      else
        render json: @note_tag.errors.full_messages, status: 422
      end

    else
      @tag = note.tags.create(tag_params.merge({ user_id: current_user.id }))

      if @tag.id
        render :show
      else
        render json: @tag.errors.full_messages, status: 422
      end
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
