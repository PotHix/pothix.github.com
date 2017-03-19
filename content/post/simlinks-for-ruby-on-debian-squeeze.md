+++
title = "Simlinks for ruby on Debian Squeeze"
date = "2012-07-17"
tags = ["dev","linux","english"]
categories = "dev"
+++

Every time we need to deploy a new Ruby application on top of Debian Squeeze
we need to fix some Ruby depedencies to make the application work as it should.

It happens because we're building using rvm instead of the packaged version
of ruby, but it needed to be that way in order to use our old build server.

I'll keep it documented here:

    ln -s /usr/lib/libruby-1.9.1.so.1.9.1 /usr/lib/libruby.so.1.9
    ln -s /usr/bin/rake1.9.1 /usr/bin/rake
    ln -s /usr/bin/ruby1.9.1 /usr/bin/ruby
    ln -s /usr/bin/gem1.9.1 /usr/bin/gem

After that run `ldconfig`.

It should make the common ruby commands work again. :)
