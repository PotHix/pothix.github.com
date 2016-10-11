###
# Blog settings
###

require "yaml"

Time.zone = "UTC"

set :markdown_engine, :redcarpet
set :markdown, :fenced_code_blocks => true, :smartypants => true

activate :syntax, :line_numbers => true

activate :blog do |blog|
  blog.permalink = "{year}/{month}/{day}/{title}.html"
  blog.taglink = "tags/{tag}.html"
  blog.layout = "post_layout"
  blog.summary_length = 400
  blog.default_extension = ".markdown"

  blog.tag_template = "tag.html"
  blog.calendar_template = "calendar.html"

  blog.sources = "posts/:title.html"

  blog.paginate = true
  blog.per_page = 10
  blog.page_link = "page/{num}"

  blog.custom_collections = {
    category: {
      link: "/categories/{category}.html",
      template: "category.html"
    }
  }
end

page "/feed.xml",      layout: false
page "/feed_en.xml",   layout: false
page "/feed_tech.xml", layout: false

redirect "mywork.html", to: "coding.html"

helpers do
  def coding
    YAML.load_file(File.expand_path("../source/coding.yml", __FILE__))
  end

  def writing
    YAML.load_file(File.expand_path("../source/writing.yml", __FILE__))
  end

  def speaking
    YAML.load_file(File.expand_path("../source/speaking.yml", __FILE__))
  end
end

set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'

# Build-specific configuration
configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :asset_hash
end
