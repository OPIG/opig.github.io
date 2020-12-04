# When using a Gemfile, you’ll run commands like jekyll serve with bundle exec prefixed. So the full command is:
#   `bundle exec jekyll serve`
#   This restricts your Ruby environment to only use gems set in your `Gemfile`

# frozen_string_literal: true

source "https://rubygems.org"

git_source(:github) {|repo_name| "https://github.com/#{repo_name}" }

# gem "rails"

gem "jekyll"


# https://jekyllrb.com/docs/step-by-step/10-deployment/
# Jekyll plugins allow you to create custom generated content specific to your site. There’s many plugins available or you can even write your own.
# There are three official plugins which are useful on almost any Jekyll site
# To use these first you need to add them to your Gemfile. If you put them in a jekyll_plugins group they’ll automatically be required into Jekyll:
# `
group :jekyll_plugins do
  gem 'jekyll-sitemap'   # - Creates a sitemap file to help search engines index content
  gem 'jekyll-feed'      # - Creates an RSS feed for your posts
  gem 'jekyll-seo-tag'   # - Adds meta tags to help with SEO
  gem 'jekyll-paginate'  # - add paginate
end
# `
# Then add these lines to your `_config.yml`: 
# `
  # plugins:
  #   - jekyll-feed
  #   - jekyll-sitemap
  #   - jekyll-seo-tag
# `
# Now install them by running a `bundle update`

