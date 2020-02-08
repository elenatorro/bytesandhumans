class FilteredPage
  def initialize(title, image, description, url)
    @title = title
    @image = image
    @description = description
    @url = url
  end
end

module Jekyll
  module ContentFilter
    def filter_content(pages)
      new_pages = pages.map { |page|
        page.content = nil;
        page
      }

      puts new_pages
      new_pages
    end
  end
end

Liquid::Template.register_filter(Jekyll::ContentFilter)
