+++
title = "Ruby, Python e native threads"
aliases=[
  "post/ruby-python-e-native-threads",
  "2014/02/14/ruby-python-e-native-threads.html",
  "blog/development/ruby-python-e-native-threads"
]
date = "2014-02-14"
tags = ["ruby","python","tech"]
+++

Pode ser que eu seja meio burro (heheh) mas eu ainda achava que o Ruby e o
Python usavam Green Threads, mas depois de conversar com uma galera me disseram
que eram threads nativas. Pesquisando na internet eu vi que eram mesmo, mas decidi
rodar um strace para ver elas rolando e postar sobre isso.

Fiz dois scripts simples:

**Python**

    import threading
    import time
    for i in range(5):
        t = threading.Thread(target=time.sleep, args=(1,))
        t.start()


**Ruby**

    require 'thread'
    5.times do
      Thread.new {sleep 10}
    end
    sleep 1


Rodando o script python com o comando <code>strace -f -e clone,fork python thread.py</code> retorna pouca coisa:

    clone(Process 13920 attached
    child_stack=0x7f8570b67ff0, flags=CLONE_VM|CLONE_FS|CLONE_FILES|CLONE_SIGHAND|CLONE_THREAD|CLONE_SYSVSEM|CLONE_SETTLS|CLONE_PARENT_SETTID|CLONE_CHILD_CLEARTID, parent_tidptr=0x7f8570b689d0, tls=0x7f8570b68700, child_tidptr=0x7f8570b689d0) = 13920
    [pid 13919] clone(Process 13921 attached
    child_stack=0x7f856bffeff0, flags=CLONE_VM|CLONE_FS|CLONE_FILES|CLONE_SIGHAND|CLONE_THREAD|CLONE_SYSVSEM|CLONE_SETTLS|CLONE_PARENT_SETTID|CLONE_CHILD_CLEARTID, parent_tidptr=0x7f856bfff9d0, tls=0x7f856bfff700, child_tidptr=0x7f856bfff9d0) = 13921
    [pid 13919] clone(Process 13922 attached
    child_stack=0x7f856b7fdff0, flags=CLONE_VM|CLONE_FS|CLONE_FILES|CLONE_SIGHAND|CLONE_THREAD|CLONE_SYSVSEM|CLONE_SETTLS|CLONE_PARENT_SETTID|CLONE_CHILD_CLEARTID, parent_tidptr=0x7f856b7fe9d0, tls=0x7f856b7fe700, child_tidptr=0x7f856b7fe9d0) = 13922
    [pid 13919] clone(Process 13923 attached
    child_stack=0x7f856affcff0, flags=CLONE_VM|CLONE_FS|CLONE_FILES|CLONE_SIGHAND|CLONE_THREAD|CLONE_SYSVSEM|CLONE_SETTLS|CLONE_PARENT_SETTID|CLONE_CHILD_CLEARTID, parent_tidptr=0x7f856affd9d0, tls=0x7f856affd700, child_tidptr=0x7f856affd9d0) = 13923
    [pid 13919] clone(Process 13924 attached
    child_stack=0x7f856a7fbff0, flags=CLONE_VM|CLONE_FS|CLONE_FILES|CLONE_SIGHAND|CLONE_THREAD|CLONE_SYSVSEM|CLONE_SETTLS|CLONE_PARENT_SETTID|CLONE_CHILD_CLEARTID, parent_tidptr=0x7f856a7fc9d0, tls=0x7f856a7fc700, child_tidptr=0x7f856a7fc9d0) = 13924
    [pid 13921] +++ exited with 0 +++
    [pid 13920] +++ exited with 0 +++
    [pid 13924] +++ exited with 0 +++
    [pid 13922] +++ exited with 0 +++
    [pid 13923] +++ exited with 0 +++
    +++ exited with 0 +++


Conseguimos ver claramente as 5 threads do SO aí em cima. :)

Já no ruby, rodando com o mesmo esquema (<code>strace -f -e clone,fork ruby thread.rb</code>) retorna bem mais coisas:

    clone(child_stack=0, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7ff2580cc9d0) = 14588
    Process 14588 attached
    [pid 14588] clone(Process 14589 attached
    child_stack=0, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7ff2580cc9d0) = 14589
    [pid 14588] clone(Process 14590 attached
    child_stack=0, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7ff2580cc9d0) = 14590
    [pid 14589] +++ exited with 1 +++
    [pid 14590] +++ exited with 0 +++
    [pid 14588] +++ SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=14589, si_status=1, si_utime=0, si_stime=0} +++
    [pid 14588] +++ exited with 0 +++
    +++ SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=14588, si_status=0, si_utime=0, si_stime=0} +++
    clone(Process 14591 attached
    child_stack=0, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7ff2580cc9d0) = 14591
    [pid 14591] +++ exited with 0 +++
    +++ SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=14591, si_status=0, si_utime=0, si_stime=0} +++
    clone(Process 14592 attached
    child_stack=0, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7ff2580cc9d0) = 14592
    [pid 14592] clone(Process 14593 attached
    child_stack=0, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7ff2580cc9d0) = 14593
    [pid 14593] +++ exited with 0 +++
    [pid 14592] +++ SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=14593, si_status=0, si_utime=0, si_stime=0} +++
    [pid 14592] clone(Process 14594 attached
    child_stack=0, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7ff2580cc9d0) = 14594
    [pid 14594] clone(Process 14595 attached
    child_stack=0, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7ff2580cc9d0) = 14595
    [pid 14595] +++ exited with 1 +++
    [pid 14594] +++ SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=14595, si_status=1, si_utime=0, si_stime=0} +++
    [pid 14594] +++ exited with 0 +++
    [pid 14592] +++ SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=14594, si_status=0, si_utime=0, si_stime=0} +++
    [pid 14592] +++ exited with 0 +++
    +++ SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=14592, si_status=0, si_utime=0, si_stime=0} +++
    clone(Process 14596 attached
    child_stack=0, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7ff2580cc9d0) = 14596
    [pid 14596] +++ exited with 0 +++
    +++ SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=14596, si_status=0, si_utime=0, si_stime=0} +++
    clone(Process 14597 attached
    child_stack=0, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fd34d4569d0) = 14597
    [pid 14597] clone(Process 14598 attached
    child_stack=0, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f1df327b9d0) = 14598
    [pid 14598] +++ exited with 0 +++
    [pid 14597] +++ SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=14598, si_status=0, si_utime=0, si_stime=0} +++
    [pid 14597] clone(child_stack=0, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f1df327b9d0) = 14599
    Process 14599 attached
    [pid 14599] clone(Process 14600 attached
    child_stack=0, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f1df327b9d0) = 14600
    [pid 14600] clone(Process 14601 attached
    child_stack=0, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fb4232139d0) = 14601
    [pid 14601] clone(Process 14602 attached
    child_stack=0, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fb4232139d0) = 14602
    [pid 14602] +++ exited with 0 +++
    [pid 14601] +++ SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=14602, si_status=0, si_utime=0, si_stime=0} +++
    [pid 14601] +++ exited with 0 +++
    [pid 14600] +++ SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=14601, si_status=0, si_utime=0, si_stime=0} +++
    [pid 14600] +++ exited with 0 +++
    [pid 14599] +++ SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=14600, si_status=0, si_utime=0, si_stime=0} +++
    [pid 14599] +++ exited with 0 +++
    [pid 14597] +++ SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=14599, si_status=0, si_utime=0, si_stime=0} +++
    [pid 14597] +++ exited with 0 +++
    +++ SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=14597, si_status=0, si_utime=0, si_stime=0} +++
    clone(Process 14603 attached
    child_stack=0, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fd34d4569d0) = 14603
    [pid 14603] clone(Process 14604 attached
    child_stack=0, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fb42e4469d0) = 14604
    [pid 14604] +++ exited with 0 +++
    [pid 14603] +++ SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=14604, si_status=0, si_utime=0, si_stime=0} +++
    [pid 14603] clone(Process 14605 attached
    child_stack=0, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fb42e4469d0) = 14605
    [pid 14605] clone(Process 14606 attached
    child_stack=0, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fb27c11e9d0) = 14606
    [pid 14606] clone(Process 14607 attached
    child_stack=0, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fb27c11e9d0) = 14607
    [pid 14606] clone(Process 14608 attached
    child_stack=0, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fb27c11e9d0) = 14608
    [pid 14607] +++ exited with 1 +++
    [pid 14608] +++ exited with 0 +++
    [pid 14606] +++ SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=14607, si_status=1, si_utime=0, si_stime=0} +++
    [pid 14606] +++ exited with 0 +++
    [pid 14605] +++ SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=14606, si_status=0, si_utime=0, si_stime=0} +++
    [pid 14605] +++ exited with 0 +++
    [pid 14603] +++ SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=14605, si_status=0, si_utime=0, si_stime=0} +++
    [pid 14603] +++ exited with 0 +++
    +++ SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=14603, si_status=0, si_utime=0, si_stime=0} +++
    clone(Process 14609 attached
    child_stack=0, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fd34d4569d0) = 14609
    [pid 14609] clone(Process 14610 attached
    child_stack=0, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f2136e3e9d0) = 14610
    [pid 14610] clone(Process 14611 attached
    child_stack=0, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f2136e3e9d0) = 14611
    [pid 14610] clone(child_stack=0, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f2136e3e9d0) = 14612
    Process 14612 attached
    [pid 14611] +++ exited with 1 +++
    [pid 14612] +++ exited with 0 +++
    [pid 14610] +++ SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=14611, si_status=1, si_utime=0, si_stime=0} +++
    [pid 14610] +++ exited with 0 +++
    [pid 14609] +++ SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=14610, si_status=0, si_utime=0, si_stime=0} +++
    [pid 14609] +++ exited with 0 +++
    +++ SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=14609, si_status=0, si_utime=0, si_stime=0} +++
    clone(child_stack=0x7fa6a3eedff0, flags=CLONE_VM|CLONE_FS|CLONE_FILES|CLONE_SIGHAND|CLONE_THREAD|CLONE_SYSVSEM|CLONE_SETTLS|CLONE_PARENT_SETTID|CLONE_CHILD_CLEARTID, parent_tidptr=0x7fa6a3eee9d0, tls=0x7fa6a3eee700, child_tidptr=0x7fa6a3eee9d0) = 14613
    Process 14613 attached
    [pid 14587] clone(Process 14614 attached
    child_stack=0x7fa6a27bdff0, flags=CLONE_VM|CLONE_FS|CLONE_FILES|CLONE_SIGHAND|CLONE_THREAD|CLONE_SYSVSEM|CLONE_SETTLS|CLONE_PARENT_SETTID|CLONE_CHILD_CLEARTID, parent_tidptr=0x7fa6a27be9d0, tls=0x7fa6a27be700, child_tidptr=0x7fa6a27be9d0) = 14614
    [pid 14587] clone(Process 14615 attached
    child_stack=0x7fa6a25bbff0, flags=CLONE_VM|CLONE_FS|CLONE_FILES|CLONE_SIGHAND|CLONE_THREAD|CLONE_SYSVSEM|CLONE_SETTLS|CLONE_PARENT_SETTID|CLONE_CHILD_CLEARTID, parent_tidptr=0x7fa6a25bc9d0, tls=0x7fa6a25bc700, child_tidptr=0x7fa6a25bc9d0) = 14615
    [pid 14587] clone(Process 14616 attached
    child_stack=0x7fa6a23b9ff0, flags=CLONE_VM|CLONE_FS|CLONE_FILES|CLONE_SIGHAND|CLONE_THREAD|CLONE_SYSVSEM|CLONE_SETTLS|CLONE_PARENT_SETTID|CLONE_CHILD_CLEARTID, parent_tidptr=0x7fa6a23ba9d0, tls=0x7fa6a23ba700, child_tidptr=0x7fa6a23ba9d0) = 14616
    [pid 14587] clone(Process 14617 attached
    child_stack=0x7fa6a21b7ff0, flags=CLONE_VM|CLONE_FS|CLONE_FILES|CLONE_SIGHAND|CLONE_THREAD|CLONE_SYSVSEM|CLONE_SETTLS|CLONE_PARENT_SETTID|CLONE_CHILD_CLEARTID, parent_tidptr=0x7fa6a21b89d0, tls=0x7fa6a21b8700, child_tidptr=0x7fa6a21b89d0) = 14617
    [pid 14587] clone(Process 14618 attached
    child_stack=0x7fa6a1fb5ff0, flags=CLONE_VM|CLONE_FS|CLONE_FILES|CLONE_SIGHAND|CLONE_THREAD|CLONE_SYSVSEM|CLONE_SETTLS|CLONE_PARENT_SETTID|CLONE_CHILD_CLEARTID, parent_tidptr=0x7fa6a1fb69d0, tls=0x7fa6a1fb6700, child_tidptr=0x7fa6a1fb69d0) = 14618
    [pid 14614] +++ exited with 0 +++
    [pid 14615] +++ exited with 0 +++
    [pid 14616] +++ exited with 0 +++
    [pid 14617] +++ exited with 0 +++
    [pid 14618] +++ exited with 0 +++
    [pid 14613] +++ exited with 0 +++
    +++ exited with 0 +++
    clone(child_stack=0, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7ff2580cc9d0) = 14588
    Process 14588 attached
    [pid 14588] clone(Process 14589 attached
    child_stack=0, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7ff2580cc9d0) = 14589
    [pid 14588] clone(Process 14590 attached
    child_stack=0, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7ff2580cc9d0) = 14590
    [pid 14589] +++ exited with 1 +++
    [pid 14590] +++ exited with 0 +++
    [pid 14588] +++ SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=14589, si_status=1, si_utime=0, si_stime=0} +++
    [pid 14588] +++ exited with 0 +++
    +++ SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=14588, si_status=0, si_utime=0, si_stime=0} +++
    clone(Process 14591 attached
    child_stack=0, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7ff2580cc9d0) = 14591
    [pid 14591] +++ exited with 0 +++
    +++ SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=14591, si_status=0, si_utime=0, si_stime=0} +++
    clone(Process 14592 attached
    child_stack=0, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7ff2580cc9d0) = 14592
    [pid 14592] clone(Process 14593 attached
    child_stack=0, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7ff2580cc9d0) = 14593
    [pid 14593] +++ exited with 0 +++
    [pid 14592] +++ SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=14593, si_status=0, si_utime=0, si_stime=0} +++
    [pid 14592] clone(Process 14594 attached
    child_stack=0, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7ff2580cc9d0) = 14594
    [pid 14594] clone(Process 14595 attached
    child_stack=0, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7ff2580cc9d0) = 14595
    [pid 14595] +++ exited with 1 +++
    [pid 14594] +++ SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=14595, si_status=1, si_utime=0, si_stime=0} +++
    [pid 14594] +++ exited with 0 +++
    [pid 14592] +++ SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=14594, si_status=0, si_utime=0, si_stime=0} +++
    [pid 14592] +++ exited with 0 +++
    +++ SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=14592, si_status=0, si_utime=0, si_stime=0} +++
    clone(Process 14596 attached
    child_stack=0, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7ff2580cc9d0) = 14596
    [pid 14596] +++ exited with 0 +++
    +++ SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=14596, si_status=0, si_utime=0, si_stime=0} +++
    clone(Process 14597 attached
    child_stack=0, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fd34d4569d0) = 14597
    [pid 14597] clone(Process 14598 attached
    child_stack=0, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f1df327b9d0) = 14598
    [pid 14598] +++ exited with 0 +++
    [pid 14597] +++ SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=14598, si_status=0, si_utime=0, si_stime=0} +++
    [pid 14597] clone(child_stack=0, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f1df327b9d0) = 14599
    Process 14599 attached
    [pid 14599] clone(Process 14600 attached
    child_stack=0, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f1df327b9d0) = 14600
    [pid 14600] clone(Process 14601 attached
    child_stack=0, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fb4232139d0) = 14601
    [pid 14601] clone(Process 14602 attached
    child_stack=0, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fb4232139d0) = 14602
    [pid 14602] +++ exited with 0 +++
    [pid 14601] +++ SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=14602, si_status=0, si_utime=0, si_stime=0} +++
    [pid 14601] +++ exited with 0 +++
    [pid 14600] +++ SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=14601, si_status=0, si_utime=0, si_stime=0} +++
    [pid 14600] +++ exited with 0 +++
    [pid 14599] +++ SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=14600, si_status=0, si_utime=0, si_stime=0} +++
    [pid 14599] +++ exited with 0 +++
    [pid 14597] +++ SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=14599, si_status=0, si_utime=0, si_stime=0} +++
    [pid 14597] +++ exited with 0 +++
    +++ SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=14597, si_status=0, si_utime=0, si_stime=0} +++
    clone(Process 14603 attached
    child_stack=0, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fd34d4569d0) = 14603
    [pid 14603] clone(Process 14604 attached
    child_stack=0, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fb42e4469d0) = 14604
    [pid 14604] +++ exited with 0 +++
    [pid 14603] +++ SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=14604, si_status=0, si_utime=0, si_stime=0} +++
    [pid 14603] clone(Process 14605 attached
    child_stack=0, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fb42e4469d0) = 14605
    [pid 14605] clone(Process 14606 attached
    child_stack=0, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fb27c11e9d0) = 14606
    [pid 14606] clone(Process 14607 attached
    child_stack=0, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fb27c11e9d0) = 14607
    [pid 14606] clone(Process 14608 attached
    child_stack=0, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fb27c11e9d0) = 14608
    [pid 14607] +++ exited with 1 +++
    [pid 14608] +++ exited with 0 +++
    [pid 14606] +++ SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=14607, si_status=1, si_utime=0, si_stime=0} +++
    [pid 14606] +++ exited with 0 +++
    [pid 14605] +++ SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=14606, si_status=0, si_utime=0, si_stime=0} +++
    [pid 14605] +++ exited with 0 +++
    [pid 14603] +++ SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=14605, si_status=0, si_utime=0, si_stime=0} +++
    [pid 14603] +++ exited with 0 +++
    +++ SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=14603, si_status=0, si_utime=0, si_stime=0} +++
    clone(Process 14609 attached
    child_stack=0, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fd34d4569d0) = 14609
    [pid 14609] clone(Process 14610 attached
    child_stack=0, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f2136e3e9d0) = 14610
    [pid 14610] clone(Process 14611 attached
    child_stack=0, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f2136e3e9d0) = 14611
    [pid 14610] clone(child_stack=0, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f2136e3e9d0) = 14612
    Process 14612 attached
    [pid 14611] +++ exited with 1 +++
    [pid 14612] +++ exited with 0 +++
    [pid 14610] +++ SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=14611, si_status=1, si_utime=0, si_stime=0} +++
    [pid 14610] +++ exited with 0 +++
    [pid 14609] +++ SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=14610, si_status=0, si_utime=0, si_stime=0} +++
    [pid 14609] +++ exited with 0 +++
    +++ SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=14609, si_status=0, si_utime=0, si_stime=0} +++
    clone(child_stack=0x7fa6a3eedff0, flags=CLONE_VM|CLONE_FS|CLONE_FILES|CLONE_SIGHAND|CLONE_THREAD|CLONE_SYSVSEM|CLONE_SETTLS|CLONE_PARENT_SETTID|CLONE_CHILD_CLEARTID, parent_tidptr=0x7fa6a3eee9d0, tls=0x7fa6a3eee700, child_tidptr=0x7fa6a3eee9d0) = 14613
    Process 14613 attached
    [pid 14587] clone(Process 14614 attached
    child_stack=0x7fa6a27bdff0, flags=CLONE_VM|CLONE_FS|CLONE_FILES|CLONE_SIGHAND|CLONE_THREAD|CLONE_SYSVSEM|CLONE_SETTLS|CLONE_PARENT_SETTID|CLONE_CHILD_CLEARTID, parent_tidptr=0x7fa6a27be9d0, tls=0x7fa6a27be700, child_tidptr=0x7fa6a27be9d0) = 14614
    [pid 14587] clone(Process 14615 attached
    child_stack=0x7fa6a25bbff0, flags=CLONE_VM|CLONE_FS|CLONE_FILES|CLONE_SIGHAND|CLONE_THREAD|CLONE_SYSVSEM|CLONE_SETTLS|CLONE_PARENT_SETTID|CLONE_CHILD_CLEARTID, parent_tidptr=0x7fa6a25bc9d0, tls=0x7fa6a25bc700, child_tidptr=0x7fa6a25bc9d0) = 14615
    [pid 14587] clone(Process 14616 attached
    child_stack=0x7fa6a23b9ff0, flags=CLONE_VM|CLONE_FS|CLONE_FILES|CLONE_SIGHAND|CLONE_THREAD|CLONE_SYSVSEM|CLONE_SETTLS|CLONE_PARENT_SETTID|CLONE_CHILD_CLEARTID, parent_tidptr=0x7fa6a23ba9d0, tls=0x7fa6a23ba700, child_tidptr=0x7fa6a23ba9d0) = 14616
    [pid 14587] clone(Process 14617 attached
    child_stack=0x7fa6a21b7ff0, flags=CLONE_VM|CLONE_FS|CLONE_FILES|CLONE_SIGHAND|CLONE_THREAD|CLONE_SYSVSEM|CLONE_SETTLS|CLONE_PARENT_SETTID|CLONE_CHILD_CLEARTID, parent_tidptr=0x7fa6a21b89d0, tls=0x7fa6a21b8700, child_tidptr=0x7fa6a21b89d0) = 14617
    [pid 14587] clone(Process 14618 attached
    child_stack=0x7fa6a1fb5ff0, flags=CLONE_VM|CLONE_FS|CLONE_FILES|CLONE_SIGHAND|CLONE_THREAD|CLONE_SYSVSEM|CLONE_SETTLS|CLONE_PARENT_SETTID|CLONE_CHILD_CLEARTID, parent_tidptr=0x7fa6a1fb69d0, tls=0x7fa6a1fb6700, child_tidptr=0x7fa6a1fb69d0) = 14618
    [pid 14614] +++ exited with 0 +++
    [pid 14615] +++ exited with 0 +++
    [pid 14616] +++ exited with 0 +++
    [pid 14617] +++ exited with 0 +++
    [pid 14618] +++ exited with 0 +++
    [pid 14613] +++ exited with 0 +++
    +++ exited with 0 +++


Alí no final dá para ver as 5 threads que eu pedi no script sendo abertas no
SO. Inclusive, se analizar todo esse retorno aí dá para ver que o Ruby criou 6
threads, uma delas o ruby cria mesmo se vc fizer só um <code>puts</code> num script. :)

Discutir sobre linguagens com os amigos sempre é legal para pesquisar e
descobrir coisas novas. :)



