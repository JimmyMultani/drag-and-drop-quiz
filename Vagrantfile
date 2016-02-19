# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|

    config.vm.box = "scotch/box"
    config.vm.hostname = "scotchbox"
    # config.vm.network "private_network", ip: "192.168.33.10"
    config.vm.network "private_network", ip: "10.101.3.2"
    config.vm.network :forwarded_port, host: 8080, guest: 80, auto_correct: true
    config.vm.usable_port_range = 8080..8099

    config.vm.synced_folder ".", "/var/www", :mount_options => ["dmode=777", "fmode=666"]

    # Optional NFS. Make sure to remove other synced_folder line too
    #config.vm.synced_folder ".", "/var/www", :nfs => { :mount_options => ["dmode=777","fmode=666"] }

end
