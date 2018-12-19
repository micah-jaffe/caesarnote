class Api::NoteTagsController < ApplicationController
  def destroy
    @note_tag = NoteTag.find(params[:id])
    # @tag = note_tag.tag
    @note_tag.destroy
    render :show
  end
end