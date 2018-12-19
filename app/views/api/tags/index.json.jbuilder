@tags.each do |tag|
  json.tags do
    json.partial! '/api/tags/tag', tag: tag
  end

  json.note_tags do
    tag.note_tags.each do |note_tag| 
      json.partial! '/api/note_tags/note_tag', note_tag: note_tag
    end
  end
end
