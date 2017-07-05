require 'solr_wrapper'

task :ci do
  SolrWrapper.wrap do |solr|
    solr.with_collection(name: 'default-core', dir: File.join(File.expand_path('.', File.dirname(__FILE__)), 'solr', 'conf')) do
      system 'npm run ci'
    end
  end
end
