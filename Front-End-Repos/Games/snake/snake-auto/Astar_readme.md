A* 寻路算法
原文地址： http://www.gamedev.net/reference/articles/article2003.asp

概述
虽然掌握了 A* 算法的人认为它容易，但是对于初学者来说， A* 算法还是很复杂的。

搜索区域(The Search Area)
我们假设某人要从 A 点移动到 B 点，但是这两点之间被一堵墙隔开。如图 1 ，绿色是 A ，红色是 B ，中间蓝色是墙。

image001.jpg

图 1

你应该注意到了，我们把要搜寻的区域划分成了正方形的格子。这是寻路的第一步，简化搜索区域，就像我们这里做的一样。这个特殊的方法把我们的搜索区域简化为了 2 维数组。数组的每一项代表一个格子，它的状态就是可走 (walkalbe) 和不可走 (unwalkable) 。通过计算出从 A 到 B需要走过哪些方格，就找到了路径。一旦路径找到了，人物便从一个方格的中心移动到另一个方格的中心，直至到达目的地。

方格的中心点我们成为“节点 (nodes) ”。如果你读过其他关于 A* 寻路算法的文章，你会发现人们常常都在讨论节点。为什么不直接描述为方格呢？因为我们有可能把搜索区域划为为其他多变形而不是正方形，例如可以是六边形，矩形，甚至可以是任意多变形。而节点可以放在任意多边形里面，可以放在多变形的中心，也可以放在多边形的边上。我们使用这个系统，因为它最简单。

开始搜索(Starting the Search)
一旦我们把搜寻区域简化为一组可以量化的节点后，就像上面做的一样，我们下一步要做的便是查找最短路径。在 A* 中，我们从起点开始，检查其相邻的方格，然后向四周扩展，直至找到目标。

我们这样开始我们的寻路旅途：

1.       从起点 A 开始，并把它就加入到一个由方格组成的 open list( 开放列表 ) 中。这个 open list 有点像是一个购物单。当然现在 open list 里只有一项，它就是起点 A ，后面会慢慢加入更多的项。 Open list 里的格子是路径可能会是沿途经过的，也有可能不经过。基本上 open list 是一个待检查的方格列表。

2.       查看与起点 A 相邻的方格 ( 忽略其中墙壁所占领的方格，河流所占领的方格及其他非法地形占领的方格 ) ，把其中可走的 (walkable) 或可到达的 (reachable) 方格也加入到 open list 中。把起点 A 设置为这些方格的父亲 (parent node 或 parent square) 。当我们在追踪路径时，这些父节点的内容是很重要的。稍后解释。

3.       把 A 从 open list 中移除，加入到 close list( 封闭列表 ) 中， close list 中的每个方格都是现在不需要再关注的。

如下图所示，深绿色的方格为起点，它的外框是亮蓝色，表示该方格被加入到了 close list 。与它相邻的黑色方格是需要被检查的，他们的外框是亮绿色。每个黑方格都有一个灰色的指针指向他们的父节点，这里是起点 A 。

image002.jpg

图 2 。

下一步，我们需要从 open list 中选一个与起点 A 相邻的方格，按下面描述的一样或多或少的重复前面的步骤。但是到底选择哪个方格好呢？具有最小 F 值的那个。

 

路径排序(Path Sorting)
计算出组成路径的方格的关键是下面这个等式：

F = G + H

这里，

G = 从起点 A 移动到指定方格的移动代价，沿着到达该方格而生成的路径。

H = 从指定的方格移动到终点 B 的估算成本。这个通常被称为试探法，有点让人混淆。为什么这么叫呢，因为这是个猜测。直到我们找到了路径我们才会知道真正的距离，因为途中有各种各样的东西 ( 比如墙壁，水等 ) 。本教程将教你一种计算 H 的方法，你也可以在网上找到其他方法。

我们的路径是这么产生的：反复遍历 open list ，选择 F 值最小的方格。这个过程稍后详细描述。我们还是先看看怎么去计算上面的等式。

如上所述， G 是从起点Ａ移动到指定方格的移动代价。在本例中，横向和纵向的移动代价为 10 ，对角线的移动代价为 14 。之所以使用这些数据，是因为实际的对角移动距离是 2 的平方根，或者是近似的 1.414 倍的横向或纵向移动代价。使用 10 和 14 就是为了简单起见。比例是对的，我们避免了开放和小数的计算。这并不是我们没有这个能力或是不喜欢数学。使用这些数字也可以使计算机更快。稍后你便会发现，如果不使用这些技巧，寻路算法将很慢。

 

既然我们是沿着到达指定方格的路径来计算 G 值，那么计算出该方格的 G 值的方法就是找出其父亲的 G 值，然后按父亲是直线方向还是斜线方向加上 10 或 14 。随着我们离开起点而得到更多的方格，这个方法会变得更加明朗。

 

有很多方法可以估算 H 值。这里我们使用 Manhattan 方法，计算从当前方格横向或纵向移动到达目标所经过的方格数，忽略对角移动，然后把总数乘以 10 。之所以叫做 Manhattan 方法，是因为这很像统计从一个地点到另一个地点所穿过的街区数，而你不能斜向穿过街区。重要的是，计算 H 是，要忽略路径中的障碍物。这是对剩余距离的估算值，而不是实际值，因此才称为试探法。

 

把 G 和 H 相加便得到 F 。我们第一步的结果如下图所示。每个方格都标上了 F ， G ， H 的值，就像起点右边的方格那样，左上角是 F ，左下角是 G ，右下角是 H 。

image003.jpg

图 3

好，现在让我们看看其中的一些方格。在标有字母的方格， G = 10 。这是因为水平方向从起点到那里只有一个方格的距离。与起点直接相邻的上方，下方，左方的方格的 G 值都是 10 ，对角线的方格 G 值都是 14 。

 

H 值通过估算起点于终点 ( 红色方格 ) 的 Manhattan 距离得到，仅作横向和纵向移动，并且忽略沿途的墙壁。使用这种方式，起点右边的方格到终点有 3 个方格的距离，因此 H = 30 。这个方格上方的方格到终点有 4 个方格的距离 ( 注意只计算横向和纵向距离 ) ，因此 H = 40 。对于其他的方格，你可以用同样的方法知道 H 值是如何得来的。

 

每个方格的 F 值，再说一次，直接把 G 值和 H 值相加就可以了。

 

继续搜索(Continuing the Search)
为了继续搜索，我们从 open list 中选择 F 值最小的 ( 方格 ) 节点，然后对所选择的方格作如下操作：

4.       把它从 open list 里取出，放到 close list 中。

5.       检查所有与它相邻的方格，忽略其中在 close list 中或是不可走 (unwalkable) 的方格 ( 比如墙，水，或是其他非法地形 ) ，如果方格不在open lsit 中，则把它们加入到 open list 中。

把我们选定的方格设置为这些新加入的方格的父亲。

6.       如果某个相邻的方格已经在 open list 中，则检查这条路径是否更优，也就是说经由当前方格 ( 我们选中的方格 ) 到达那个方格是否具有更小的 G 值。如果没有，不做任何操作。

相反，如果 G 值更小，则把那个方格的父亲设为当前方格 ( 我们选中的方格 ) ，然后重新计算那个方格的 F 值和 G 值。如果你还是很混淆，请参考下图。

image004.jpg

图 4

Ok ，让我们看看它是怎么工作的。在我们最初的 9 个方格中，还有 8 个在 open list 中，起点被放入了 close list 中。在这些方格中，起点右边的格子的 F 值 40 最小，因此我们选择这个方格作为下一个要处理的方格。它的外框用蓝线打亮。

 

首先，我们把它从 open list 移到 close list 中 ( 这就是为什么用蓝线打亮的原因了 ) 。然后我们检查与它相邻的方格。它右边的方格是墙壁，我们忽略。它左边的方格是起点，在 close list 中，我们也忽略。其他 4 个相邻的方格均在 open list 中，我们需要检查经由这个方格到达那里的路径是否更好，使用 G 值来判定。让我们看看上面的方格。它现在的 G 值为 14 。如果我们经由当前方格到达那里， G 值将会为 20(其中 10 为到达当前方格的 G 值，此外还要加上从当前方格纵向移动到上面方格的 G 值 10) 。显然 20 比 14 大，因此这不是最优的路径。如果你看图你就会明白。直接从起点沿对角线移动到那个方格比先横向移动再纵向移动要好。

 

当把 4 个已经在 open list 中的相邻方格都检查后，没有发现经由当前方格的更好路径，因此我们不做任何改变。现在我们已经检查了当前方格的所有相邻的方格，并也对他们作了处理，是时候选择下一个待处理的方格了。

 

因此再次遍历我们的 open list ，现在它只有 7 个方格了，我们需要选择 F 值最小的那个。有趣的是，这次有两个方格的 F 值都 54 ，选哪个呢？没什么关系。从速度上考虑，选择最后加入 open list 的方格更快。这导致了在寻路过程中，当靠近目标时，优先使用新找到的方格的偏好。但是这并不重要。 ( 对相同数据的不同对待，导致两中版本的 A* 找到等长的不同路径 ) 。

 

我们选择起点右下方的方格，如下图所示。

image005.jpg

图 5

 

这次，当我们检查相邻的方格时，我们发现它右边的方格是墙，忽略之。上面的也一样。

我们把墙下面的一格也忽略掉。为什么？因为如果不穿越墙角的话，你不能直接从当前方格移动到那个方格。你需要先往下走，然后再移动到那个方格，这样来绕过墙角。 ( 注意：穿越墙角的规则是可选的，依赖于你的节点是怎么放置的 )

 

这样还剩下 5 个相邻的方格。当前方格下面的 2 个方格还没有加入 open list ，所以把它们加入，同时把当前方格设为他们的父亲。在剩下的3 个方格中，有 2 个已经在 close list 中 ( 一个是起点，一个是当前方格上面的方格，外框被加亮的 ) ，我们忽略它们。最后一个方格，也就是当前方格左边的方格，我们检查经由当前方格到达那里是否具有更小的 G 值。没有。因此我们准备从 open list 中选择下一个待处理的方格。

 

不断重复这个过程，直到把终点也加入到了 open list 中，此时如下图所示。

image006.jpg

图 6

 

注意，在起点下面 2 格的方格的父亲已经与前面不同了。之前它的 G 值是 28 并且指向它右上方的方格。现在它的 G 值为 20 ，并且指向它正上方的方格。这在寻路过程中的某处发生，使用新路径时 G 值经过检查并且变得更低，因此父节点被重新设置， G 和 F 值被重新计算。尽管这一变化在本例中并不重要，但是在很多场合中，这种变化会导致寻路结果的巨大变化。

 

那么我们怎么样去确定实际路径呢？很简单，从终点开始，按着箭头向父节点移动，这样你就被带回到了起点，这就是你的路径。如下图所示。从起点 A 移动到终点 B 就是简单从路径上的一个方格的中心移动到另一个方格的中心，直至目标。就是这么简单！

image007.jpg

图 7

 

A*算法总结(Summary of the A* Method)
Ok ，现在你已经看完了整个的介绍，现在我们把所有步骤放在一起：

1.         把起点加入 open list 。

2.         重复如下过程：

a.         遍历 open list ，查找 F 值最小的节点，把它作为当前要处理的节点。

b.         把这个节点移到 close list 。

c.         对当前方格的 8 个相邻方格的每一个方格？

◆     如果它是不可抵达的或者它在 close list 中，忽略它。否则，做如下操作。

◆     如果它不在 open list 中，把它加入 open list ，并且把当前方格设置为它的父亲，记录该方格的 F ， G 和 H 值。

◆     如果它已经在 open list 中，检查这条路径 ( 即经由当前方格到达它那里 ) 是否更好，用 G 值作参考。更小的 G 值表示这是更好的路径。如果是这样，把它的父亲设置为当前方格，并重新计算它的 G 和 F 值。如果你的 open list 是按 F 值排序的话，改变后你可能需要重新排序。

d.         停止，当你

◆     把终点加入到了 open list 中，此时路径已经找到了，或者

◆     查找终点失败，并且 open list 是空的，此时没有路径。

3.         保存路径。从终点开始，每个方格沿着父节点移动直至起点，这就是你的路径。

 

 

题外话(Small Rant)
请原谅我的离题，当你在网上或论坛上看到各种关于 A* 算法的讨论时，你偶尔会发现一些 A* 的代码，实际上他们不是。要使用 A* ，你必须包含上面讨论的所有元素 ---- 尤其是 open list ， close list 和路径代价 G ， H 和 F 。也有很多其他的寻路算法，这些算法并不是 A* 算法， A* 被认为是最好的。在本文末尾引用的一些文章中 Bryan Stout 讨论了他们的一部分，包括他们的优缺点。在某些时候你可以二中择一，但你必须明白自己在做什么。 Ok ，不废话了。回到文章。

 

实现的注解(Notes on Implemetation)
现在你已经明白了基本方法，这里是你在写自己的程序是需要考虑的一些额外的东西。下面的材料引用了一些我用 C++ 和 Basic 写的程序，但是对其他语言同样有效。

 

1.    维护 Open List ：这是 A* 中最重要的部分。每次你访问 Open list ，你都要找出具有最小    F 值的方格。有几种做法可以做到这个。你可以随意保存路径元素，当你需要找到具     有最小 F 值的方格时，遍历整个 open list 。这个很简单，但对于很长的路径会很慢。这个方法可以通过维护一个排好序的表来改进，每次当你需要找到具有最小 F 值的方格时，仅取出表的第一项即可。我写程序时，这是我用的第一个方法。

      

       对于小地图，这可以很好的工作，但这不是最快的方案。追求速度的 A* 程序员使用了叫做二叉堆的东西，我的程序里也用了这个。以我的经验，这种方法在多数场合下会快 2—3 倍，对于更长的路径速度成几何级数增长 (10 倍甚至更快 ) 。如果你想更多的了解二叉堆，请阅读Using Binary Heaps in A* Pathfinding 。

2.       其他单位：如果你碰巧很仔细的看了我的程序，你会注意到我完全忽略了其他单位。我的寻路者实际上可以互相穿越。这取决于游戏，也许可以，也许不可以。如果你想考虑其他单位，并想使他们移动时绕过彼此，我建议你的寻路程序忽略它们，再写一些新的程序来判断两个单位是否会发生碰撞。如果发生碰撞，你可以产生一个新的路径，或者是使用一些标准的运动法则（比如永远向右移动，等等）直至障碍物不在途中，然后产生一个新的路径。为什么在计算初始路径是不包括其他单位呢？因为其他单位是可以动的，当你到达的时候它们可能不在自己的位置上。这可以产生一些怪异的结果，一个单位突然转向来避免和一个已不存在的单位碰撞，在它的路径计算出来后和穿越它路径的那些单位碰撞了。

在寻路代码中忽略其他单位，意味着你必须写另一份代码来处理碰撞。这是游戏的细节，所以我把解决方案留给你。本文末尾引用的 Bryan Stout's 的文章中的几种解决方案非常值得了解。

3.       一些速度方面的提示：如果你在开发自己的 A* 程序或者是改编我写的程序，最后你会发现寻路占用了大量的 CPU 时间，尤其是当你有相当多的寻路者和一块很大的地图时。如果你阅读过网上的资料，你会发现就算是开发星际争霸，帝国时代的专家也是这样。如果你发现事情由于寻路而变慢了，这里有些主意很不错：

◆     使用小地图或者更少的寻路者。

◆     千万不要同时给多个寻路者寻路。取而代之的是把它们放入队列中，分散到几个游戏周期中。如果你的游戏以每秒 40 周期的速度运行，没人能察觉到。但是如果同时有大量的寻路者在寻路的话，他们会马上就发现游戏慢下来了。

◆     考虑在地图中使用更大的方格。这减少了寻路时需要搜索的方格数量。如果你是有雄心的话，你可以设计多套寻路方案，根据路径的长度而使用在不同场合。这也是专业人士的做法，对长路径使用大方格，当你接近目标时使用小方格。如果你对这个有兴趣，请看 Two-Tiered A* Pathfinding 。

◆     对于很长的路径，考虑使用路径点系统，或者可以预先计算路径并加入游戏中。

◆     预先处理你的地图，指出哪些区域是不可到达的。这些区域称为“孤岛”。实际上，他们可以是岛屿，或者是被墙壁等包围而不可到达的任意区域。 A* 的下限是，你告诉他搜寻通往哪些区域的路径时，他会搜索整个地图，直到所有可以抵达的方格都通过 open list 或 close list 得到了处理。这会浪费大量的 CPU 时间。这可以通过预先设定不可到达的区域来解决。在某种数组中记录这些信息，在寻路前检查它。在我的 Blitz 版程序中，我写了个地图预处理程序来完成这个。它可以提前识别寻路算法会忽略的死路径，这又进一步提高了速度。

4.    不同的地形损耗：在这个教程和我的程序中，地形只有 2 种：可抵达的和不可抵达        的。但是如果你有些可抵达的地形，移动代价会更高些，沼泽，山丘，地牢的楼梯

       等都是可抵达的地形，但是移动代价比平地就要高。类似的，道路的移动代价就比        它周围的地形低。

在你计算给定方格的 G 值时加上地形的代价就很容易解决了这个问题。简单的给这些方格加上一些额外的代价就可以了。 A* 算法用来查找代价最低的路径，应该很容易处理这些。在我的简单例子中，地形只有可达和不可达两种， A* 会搜寻最短和最直接的路径。但是在有地形代价的环境中，代价最低的的路径可能会很长。

就像沿着公路绕过沼泽而不是直接穿越它。

另一个需要考虑的是专家所谓的“ influence Mapping ”，就像上面描述的可变成本地形一样，你可以创建一个额外的计分系统，把它应用到寻路的 AI 中。假设你有这样一张地图，地图上由个通道穿过山丘，有大批的寻路者要通过这个通道，电脑每次产生一个通过那个通道的路径都会变得很拥挤。如果需要，你可以产生一个 influence map ，它惩罚那些会发生大屠杀的方格。这会让电脑选择更安全的路径，也可以帮助它避免因为路径短（当然也更危险）而持续把队伍或寻路者送往某一特定路径。

5.    维护未探测的区域：你玩 PC 游戏的时候是否发现电脑总是能精确的选择路径，甚至地图都未被探测。对于游戏来说，寻路过于精确反而不真实。幸运的是，这个问题很容易修正。答案就是为每个玩家和电脑（每个玩家，不是每个单位 --- 那会浪费很多内存）创建一个独立的 knownWalkability 数组。每个数组包含了玩家已经探测的区域的信息，和假设是可到达的其他区域，直到被证实。使用这种方法，单位会在路的死端徘徊，并会做出错误的选择，直到在它周围找到了路径。地图一旦被探测了，寻路又向平常一样工作。

6.    平滑路径： A* 自动给你花费最小的，最短的路径，但它不会自动给你最平滑的路径。看看我们的例子所找到的路径（图 7 ）。在这条路径上，第一步在起点的右下方，如果第一步在起点的正下方是不是路径会更平滑呢？

       有几个方法解决这个问题。在你计算路径时，你可以惩罚那些改变方向的方格，把它的 G 值增加一个额外的开销。另一种选择是，你可以遍历你生成的路径，查找那些用相邻的方格替代会使路径更平滑的地方。要了解更多，请看 Toward More Realistic Pathfinding 。

7.    非方形搜索区域：在我们的例子中，我们使用都是 2D 的方形的区域。你可以使用不规则的区域。想想冒险游戏中的那些国家，你可以设计一个像那样的寻路关卡。你需要建立一张表格来保存国家相邻关系，以及从一个国家移动到另一个国家的 G 值。你还需要一个方法了估算 H 值。其他的都可以向上面的例子一样处理。当你向 open list 添加新项时，不是使用相邻的方格，而是查看表里相邻的国家。

类似的，你可以为一张固定地形的地图的路径建立路径点系统。路径点通常是道路或地牢通道的转折点。作为游戏设计者，你可以预先设定路径点。如果两个路径点的连线没有障碍物的话它们被视为相邻的。在冒险游戏的例子中，你可以保存这些相邻信息在某种表中，当 open list 增加新项时使用。然后记录 G 值（可能用两个结点间的直线距离）和 H 值（可能使用从节点到目标的直线距离）。其它的都想往常一样处理。

进一步阅读(Further Reading)
Ok ，现在你已经对 A* 有了个基本的了解，同时也认识了一些高级的主题。我强烈建议你看看我的代码，压缩包里包含了 2 个版本的实现，一个是 C++ ，另一个是 Blitz Basic 。 2 个版本都有注释，你以该可以很容易就看懂。下面是链接：

Sample Code: A* Pathfinder (2D) Version 1.71 。

 

如果你不会使用 C++ 或是 BlitzBasic ，在 C++ 版本下你可以找到两个 exe 文件。 BlitzBasic 版本必须去网站 Blitz Basic 下载 BlitzBasic 3D 的免费 Demo 才能运行。 在这里 here 你可以看到一个 Ben O'Neill 的 A* 在线验证实例。

 

你应该阅读下面这几个站点的文章。在你读完本教程后你可以更容易理解他们。

Amit's A* Pages ： Amit Patel 的这篇文章被广泛引用，但是如果你没有阅读本教程的话，你可能会感到很迷惑。尤其是你可以看到 Amit Patel自己的一些想法。

Smart Moves: Intelligent Path Finding ： Bryan Stout 的这篇需要去 Gamasutra.com 注册才能阅读。 Bryan 用 Delphi 写的程序帮助我学习了A* ，同时给了我一些我的程序中的一些灵感。他也阐述了 A* 的其他选择。

Terrain Analysis ： Dave Pottinger 一篇非常高阶的，有吸引力的文章。他是 Ensemble Studios 的一名专家。这个家伙调整了游戏帝国时代和王者时代。不要期望能够读懂这里的每一样东西，但是这是一篇能给你一些不错的主意的很有吸引力的文章。它讨论了包 mip-mapping ，

influence mapping ，和其他高阶 AI 寻路主题。他的 flood filling 给了我在处理死路径 ”dead ends” 和孤岛 ”island” 时的灵感。这包含在我的 Blitz版本的程序里。

 

下面的一些站点也值得去看看：

·                     aiGuru: Pathfinding

·                     Game AI Resource: Pathfinding

·                     GameDev.net: Pathfinding 


谢谢。


This article has been translated into Albanian, Chinese, French, German, Portuguese, Russian, and Spanish. Other translations are welcome. See email address at the bottom of this article.

The A* (pronounced A-star) algorithm can be complicated for beginners. While there are many articles on the web that explain A*, most are written for people who understand the basics already. This article is for the true beginner.

This article does not try to be the definitive work on the subject. Instead it describes the fundamentals and prepares you to go out and read all of those other materials and understand what they are talking about. Links to some of the best are provided at the end of this article, under Further Reading.

Finally, this article is not program-specific. You should be able to adapt what's here to any computer language. As you might expect, however, I have included a link to a sample program at the end of this article. The sample package contains two versions: one in C++ and one in Blitz Basic. It also contains executables if you just want to see A* in action.

But we are getting ahead of ourselves. Let's start at the beginning ...

Introduction: The Search Area
Let's assume that we have someone who wants to get from point A to point B. Let's assume that a wall separates the two points. This is illustrated below, with green being the starting point A, and red being the ending point B, and the blue filled squares being the wall in between.

aStarT1.jpg

The first thing you should notice is that we have divided our search area into a square grid. Simplifying the search area, as we have done here, is the first step in pathfinding. This particular method reduces our search area to a simple two dimensional array. Each item in the array represents one of the squares on the grid, and its status is recorded as walkable or unwalkable. The path is found by figuring out which squares we should take to get from A to B. Once the path is found, our person moves from the center of one square to the center of the next until the target is reached.

These center points are called "nodes". When you read about pathfinding elsewhere, you will often see people discussing nodes. Why not just call them squares? Because it is possible to divide up your pathfinding area into something other than squares. They could be rectangles, hexagons, triangles, or any shape, really. And the nodes could be placed anywhere within the shapes - in the center or along the edges, or anywhere else. We are using this system, however, because it is the simplest.

Starting the Search
Once we have simplified our search area into a manageable number of nodes, as we have done with the grid layout above, the next step is to conduct a search to find the shortest path. We do this by starting at point A, checking the adjacent squares, and generally searching outward until we find our target.

We begin the search by doing the following:

Begin at the starting point A and add it to an "open list" of squares to be considered. The open list is kind of like a shopping list. Right now there is just one item on the list, but we will have more later. It contains squares that might fall along the path you want to take, but maybe not. Basically, this is a list of squares that need to be checked out.
Look at all the reachable or walkable squares adjacent to the starting point, ignoring squares with walls, water, or other illegal terrain. Add them to the open list, too. For each of these squares, save point A as its "parent square". This parent square stuff is important when we want to trace our path. It will be explained more later.
Drop the starting square A from your open list, and add it to a "closed list" of squares that you don't need to look at again for now.
At this point, you should have something like the following illustration. In this illustration, the dark green square in the center is your starting square. It is outlined in light blue to indicate that the square has been added to the closed list. All of the adjacent squares are now on the open list of squares to be checked, and they are outlined in light green. Each has a gray pointer that points back to its parent, which is the starting square.

aStarT2.jpg

Next, we choose one of the adjacent squares on the open list and more or less repeat the earlier process, as described below. But which square do we choose? The one with the lowest F cost.

Path Scoring
The key to determining which squares to use when figuring out the path is the following equation:

F = G + H

where

G = the movement cost to move from the starting point A to a given square on the grid, following the path generated to get there.
H = the estimated movement cost to move from that given square on the grid to the final destination, point B. This is often referred to as the heuristic, which can be a bit confusing. The reason why it is called that is because it is a guess. We really don't know the actual distance until we find the path, because all sorts of things can be in the way (walls, water, etc.). You are given one way to calculate H in this tutorial, but there are many others that you can find in other articles on the web. Our path is generated by repeatedly going through our open list and choosing the square with the lowest F score. This process will be described in more detail a bit further in the article. First let's look more closely at how we calculate the equation.
As described above, G is the movement cost to move from the starting point to the given square using the path generated to get there. In this example, we will assign a cost of 10 to each horizontal or vertical square moved, and a cost of 14 for a diagonal move.

We use these numbers because the actual distance to move diagonally is the square root of 2 (don't be scared), or roughly 1.414 times the cost of moving horizontally or vertically. We use 10 and 14 for simplicity's sake. The ratio is about right, and we avoid having to calculate square roots and we avoid decimals. This isn't just because we are dumb and don't like math.

Using whole numbers like these is a lot faster for the computer, too. As you will soon find out, pathfinding can be very slow if you don't use short cuts like these.

Since we are calculating the G cost along a specific path to a given square, the way to figure out the G cost of that square is to take the G cost of its parent, and then add 10 or 14 depending on whether it is diagonal or orthogonal (non-diagonal) from that parent square. The need for this method will become apparent a little further on in this example, as we get more than one square away from the starting square.

H can be estimated in a variety of ways. The method we use here is called the Manhattan method, where you calculate the total number of squares moved horizontally and vertically to reach the target square from the current square, ignoring diagonal movement, and ignoring any obstacles that may be in the way. We then multiply the total by 10, our cost for moving one square horizontally or vertically. This is (probably) called the Manhattan method because it is like calculating the number of city blocks from one place to another, where you can't cut across the block diagonally.

Reading this description, you might guess that the heuristic is merely a rough estimate of the remaining distance between the current square and the target "as the crow flies." This isn't the case. We are actually trying to estimate the remaining distance along the path (which is usually farther). The closer our estimate is to the actual remaining distance, the faster the algorithm will be. If we overestimate this distance, however, it is not guaranteed to give us the shortest path. In such cases, we have what is called an "inadmissible heuristic."

Technically, in this example, the Manhattan method is inadmissible because it slightly overestimates the remaining distance. But we will use it anyway because it is a lot easier to understand for our purposes, and because it is only a slight overestimation. On the rare occasion when the resulting path is not the shortest possible, it will be nearly as short. Want to know more? You can find equations and additional notes on heuristics here.

F is calculated by adding G and H. The results of the first step in our search can be seen in the illustration below. The F, G, and H scores are written in each square. As is indicated in the square to the immediate right of the starting square, F is printed in the top left, G is printed in the bottom left, and H is printed in the bottom right.

[FIGURE 3]

So let's look at some of these squares. In the square with the letters in it, G = 10. This is because it is just one square from the starting square in a horizontal direction. The squares immediately above, below, and to the left of the starting square all have the same G score of 10. The diagonal squares have G scores of 14.

The H scores are calculated by estimating the Manhattan distance to the red target square, moving only horizontally and vertically and ignoring the wall that is in the way. Using this method, the square to the immediate right of the start is 3 squares from the red square, for a H score of 30. The square just above this square is 4 squares away (remember, only move horizontally and vertically) for an H score of 40. You can probably see how the H scores are calculated for the other squares.

The F score for each square, again, is simply calculated by adding G and H together.

Continuing the Search
To continue the search, we simply choose the lowest F score square from all those that are on the open list. We then do the following with the selected square:

Okay, so let's see how this works. Of our initial 9 squares, we have 8 left on the open list after the starting square was switched to the closed list. Of these, the one with the lowest F cost is the one to the immediate right of the starting square, with an F score of 40. So we select this square as our next square. It is highlight in blue in the following illustration.

aStarT4.jpg

First, we drop it from our open list and add it to our closed list (that's why it's now highlighted in blue). Then we check the adjacent squares. Well, the ones to the immediate right of this square are wall squares, so we ignore those. The one to the immediate left is the starting square. That's on the closed list, so we ignore that, too.

The other four squares are already on the open list, so we need to check if the paths to those squares are any better using this square to get there, using G scores as our point of reference. Let's look at the square right above our selected square. Its current G score is 14. If we instead went through the current square to get there, the G score would be equal to 20 (10, which is the G score to get to the current square, plus 10 more to go vertically to the one just above it). A G score of 20 is higher than 14, so this is not a better path. That should make sense if you look at the diagram. It's more direct to get to that square from the starting square by simply moving one square diagonally to get there, rather than moving horizontally one square, and then vertically one square.

When we repeat this process for all 4 of the adjacent squares already on the open list, we find that none of the paths are improved by going through the current square, so we don't change anything. So now that we looked at all of the adjacent squares, we are done with this square, and ready to move to the next square.

So we go through the list of squares on our open list, which is now down to 7 squares, and we pick the one with the lowest F cost. Interestingly, in this case, there are two squares with a score of 54. So which do we choose? It doesn't really matter. For the purposes of speed, it can be faster to choose the last one you added to the open list. This biases the search in favor of squares that get found later on in the search, when you have gotten closer to the target. But it doesn't really matter. (Differing treatment of ties is why two versions of A* may find different paths of equal length.)

So let's choose the one just below, and to the right of the starting square, as is shown in the following illustration.

aStarT5.jpg

This time, when we check the adjacent squares we find that the one to the immediate right is a wall square, so we ignore that. The same goes for the one just above that. We also ignore the square just below the wall. Why? Because you can't get to that square directly from the current square without cutting across the corner of the nearby wall. You really need to go down first and then move over to that square, moving around the corner in the process. (Note: This rule on cutting corners is optional. Its use depends on how your nodes are placed.)

That leaves five other squares. The other two squares below the current square aren't already on the open list, so we add them and the current square becomes their parent. Of the other three squares, two are already on the closed list (the starting square, and the one just above the current square, both highlighted in blue in the diagram), so we ignore them. And the last square, to the immediate left of the current square, is checked to see if the G score is any lower if you go through the current square to get there. No dice. So we're done and ready to check the next square on our open list.

We repeat this process until we add the target square to the closed list, at which point it looks something like the illustration below.

aStarT6.jpg

Note that the parent square for the square two squares below the starting square has changed from the previous illustration. Before it had a G score of 28 and pointed back to the square above it and to the right. Now it has a score of 20 and points to the square just above it. This happened somewhere along the way on our search, where the G score was checked and it turned out to be lower using a new path - so the parent was switched and the G and F scores were recalculated. While this change doesn't seem too important in this example, there are plenty of possible situations where this constant checking will make all the difference in determining the best path to your target.

So how do we determine the path? Simple, just start at the red target square, and work backwards moving from one square to its parent, following the arrows. This will eventually take you back to the starting square, and that's your path. It should look like the following illustration. Moving from the starting square A to the destination square B is simply a matter of moving from the center of each square (the node) to the center of the next square on the path, until you reach the target.

aStarT7.jpg

Summary of the A* Method
Okay, now that you have gone through the explanation, let's lay out the step-by-step method all in one place:

d) Stop when you:

Drop it from the open list and add it to the closed list.
Check all of the adjacent squares. Ignoring those that are on the closed list or unwalkable (terrain with walls, water, or other illegal terrain), add squares to the open list if they are not on the open list already. Make the selected square the "parent" of the new squares.
If an adjacent square is already on the open list, check to see if this path to that square is a better one. In other words, check to see if the G score for that square is lower if we use the current square to get there. If not, don't do anything.
On the other hand, if the G cost of the new path is lower, change the parent of the adjacent square to the selected square (in the diagram above, change the direction of the pointer to point at the selected square). Finally, recalculate both the F and G scores of that square. If this seems confusing, you will see it illustrated below.
Add the starting square (or node) to the open list.
Repeat the following:
a) Look for the lowest F cost square on the open list. We refer to this as the current square.
b) Switch it to the closed list.
c) For each of the 8 squares adjacent to this current square ...
If it is not walkable or if it is on the closed list, ignore it. Otherwise do the following.
If it isn't on the open list, add it to the open list. Make the current square the parent of this square. Record the F, G, and H costs of the square.
If it is on the open list already, check to see if this path to that square is better, using G cost as the measure. A lower G cost means that this is a better path. If so, change the parent of the square to the current square, and recalculate the G and F scores of the square. If you are keeping your open list sorted by F score, you may need to resort the list to account for the change.
Add the target square to the closed list, in which case the path has been found (see note below), or
Fail to find the target square, and the open list is empty. In this case, there is no path.
Save the path. Working backwards from the target square, go from each square to its parent square until you reach the starting square. That is your path. Note: In earlier versions of this article, it was suggested that you can stop when the target square (or node) has been added to the open list, rather than the closed list. Doing this will be faster and it will almost always give you the shortest path, but not always. Situations where doing this could make a difference are when the movement cost to move from the second to the last node to the last (target) node can vary significantly -- as in the case of a river crossing between two nodes, for example.
Small Rant
Forgive me for digressing, but it is worth pointing out that when you read various discussions of A* pathfinding on the web and in assorted forums, you will occasionally see someone refer to certain code as A* when it isn't. For the A* method to be used, you need to include the elements just discussed above -- specifically open and closed lists and path scoring using F, G, and H. There are lots of other pathfinding algorithms, but those other methods are not A*, which is generally considered to be the best of the lot. Bryan Stout discusses many of them in the article referenced at the end of this article, including some of their pros and cons. Sometimes alternatives are better under certain circumstances, but you should understand what you are getting into. Okay, enough ranting. Back to the article.

Notes on Implementation
Now that you understand the basic method, here are some additional things to think about when you are writing your own program. Some of the following materials reference the program I wrote in C++ and Blitz Basic, but the points are equally valid in other languages.

1. Other Units (collision avoidance): If you happen to look closely at my example code, you will notice that it completely ignores other units on the screen. The units pass right through each other. Depending on the game, this may be acceptable or it may not. If you want to consider other units in the pathfinding algorithm and have them move around one another, I suggest that you only consider units that are either stopped or adjacent to the pathfinding unit at the time the path is calculated, treating their current locations as unwalkable. For adjacent units that are moving, you can discourage collisions by penalizing nodes that lie along their respective paths, thereby encouraging the pathfinding unit to find an alternate route (described more under #2).

If you choose to consider other units that are moving and not adjacent to the pathfinding unit, you will need to develop a method for predicting where they will be at any given point in time so that they can be dodged properly. Otherwise you will probably end up with strange paths where units zig-zag to avoid other units that aren't there anymore.

You will also, of course, need to develop some collision detection code because no matter how good the path is at the time it is calculated, things can change over time. When a collision occurs a unit must either calculate a new path or, if the other unit is moving and it is not a head-on collision, wait for the other unit to step out of the way before proceeding with the current path.

These tips are probably enough to get you started. If you want to learn more, here are some links that you might find helpful:

Steering Behavior for Autonomous Characters: Craig Reynold's work on steering is a bit different from pathfinding, but it can be integrated with pathfinding to make a more complete movement and collision avoidance system.
The Long and Short of Steering in Computer Games: An interesting survey of the literature on steering and pathfinding. This is a pdf file.
Coordinated Unit Movement: First in a two-part series of articles on formation and group-based movement by Age of Empires designer Dave Pottinger.
Implementing Coordinated Movement: Second in Dave Pottinger's two-part series.
2. Variable Terrain Cost: In this tutorial and my accompanying program, terrain is just one of two things - walkable or unwalkable. But what if you have terrain that is walkable, but at a higher movement cost? Swamps, hills, stairs in a dungeon, etc. - these are all examples of terrain that is walkable, but at a higher cost than flat, open ground. Similarly, a road might have a lower movement cost than the surrounding terrain.

This problem is easily handled by adding the terrain cost in when you are calculating the G cost of any given node. Simply add a bonus cost to such nodes. The A* pathfinding algorithm is already written to find the lowest cost path and should handle this easily. In the simple example I described, when terrain is only walkable or unwalkable, A* will look for the shortest, most direct path. But in a variable-cost terrain environment, the least cost path might involve traveling a longer distance - like taking a road around a swamp rather than plowing straight through it.

An interesting additional consideration is something the professionals call "influence mapping." Just as with the variable terrain costs described above, you could create an additional point system and apply it to paths for AI purposes. Imagine that you have a map with a bunch of units defending a pass through a mountain region. Every time the computer sends somebody on a path through that pass, it gets whacked. If you wanted, you could create an influence map that penalized nodes where lots of carnage is taking place. This would teach the computer to favor safer paths, and help it avoid dumb situations where it keeps sending troops through a particular path, just because it is shorter (but also more dangerous).

Yet another possible use is penalizing nodes that lie along the paths of nearby moving units. One of the downsides of A* is that when a group of units all try to find paths to a similar location, there is usually a significant amount of overlap, as one or more units try to take the same or similar routes to their destinations. Adding a penalty to nodes already 'claimed' by other units will help ensure a degree of separation, and reduce collisions. Don't treat such nodes as unwalkable, however, because you still want multiple units to be able to squeeze through tight passageways in single file, if necessary. Also, you should only penalize the paths of units that are near the pathfinding unit, not all paths, or you will get strange dodging behavior as units avoid paths of units that are nowhere near them at the time. Also, you should only penalize path nodes that lie along the current and future portion of a path, not previous path nodes that have already been visited and left behind.

3. Handling Unexplored Areas: Have you ever played a PC game where the computer always knows exactly what path to take, even though the map hasn't been explored yet? Depending upon the game, pathfinding that is too good can be unrealistic. Fortunately, this is a problem that is can be handled fairly easily.

The answer is to create a separate "knownWalkability" array for each of the various players and computer opponents (each player, not each unit -- that would require a lot more computer memory). Each array would contain information about the areas that the player has explored, with the rest of the map assumed to be walkable until proven otherwise. Using this approach, units will wander down dead ends and make similar wrong choices until they have learned their way around. Once the map is explored, however, pathfinding would work normally.

4. Smoother Paths: While A* will automatically give you the shortest, lowest cost path, it won't automatically give you the smoothest looking path. Take a look at the final path calculated in our example (in Figure 7). On that path, the very first step is below, and to the right of the starting square. Wouldn't our path be smoother if the first step was instead the square directly below the starting square?

There are several ways to address this problem. While you are calculating the path you could penalize nodes where there is a change of direction, adding a penalty to their G scores. Alternatively, you could run through your path after it is calculated, looking for places where choosing an adjacent node would give you a path that looks better. For more on the whole issue, check out Toward More Realistic Pathfinding, a (free, but registration required) article at Gamasutra.com by Marco Pinter.

5. Non-square Search Areas: In our example, we used a simple 2D square layout. You don't need to use this approach. You could use irregularly shaped areas. Think of the board game Risk, and the countries in that game. You could devise a pathfinding scenario for a game like that. To do this, you would need to create a table for storing which countries are adjacent to which, and a G cost associated with moving from one country to the next. You would also need to come up with a method for estimating H. Everything else would be handled the same as in the above example. Instead of using adjacent squares, you would simply look up the adjacent countries in the table when adding new items to your open list.

Similarly, you could create a waypoint system for paths on a fixed terrain map. Waypoints are commonly traversed points on a path, perhaps on a road or key tunnel in a dungeon. As the game designer, you could pre-assign these waypoints. Two waypoints would be considered "adjacent" to one another if there were no obstacles on the direct line path between them. As in the Risk example, you would save this adjacency information in a lookup table of some kind and use it when generating your new open list items. You would then record the associated G costs (perhaps by using the direct line distance between the nodes) and H costs (perhaps using a direct line distance from the node to the goal). Everything else would proceed as usual.

Amit Patel has written a brief article delving into some alternatives. For another example of searching on an isometric RPG map using a non-square search area, check out my article Two-Tiered A* Pathfinding.

6. Some Speed Tips: As you develop your own A* program, or adapt the one I wrote, you will eventually find that pathfinding is using a hefty chunk of your CPU time, particularly if you have a decent number of pathfinding units on the board and a reasonably large map. If you read the stuff on the net, you will find that this is true even for the professionals who design games like Starcraft or Age of Empires. If you see things start to slow down due to pathfinding, here are some ideas that may speed things up:

Consider a smaller map or fewer units.
Never do path finding for more than a few units at a time. Instead put them in a queue and spread them out over several game cycles. If your game is running at, say, 40 cycles per second, no one will ever notice. But they will notice if the game seems to slow down every once in a while when a bunch of units are all calculating paths at the same time.
Consider using larger squares (or whatever shape you are using) for your map. This reduces the total number of nodes searched to find the path. If you are ambitious, you can devise two or more pathfinding systems that are used in different situations, depending upon the length of the path. This is what the professionals do, using large areas for long paths, and then switching to finer searches using smaller squares/areas when you get close to the target. If you are interested in this concept, check out my article Two-Tiered A* Pathfinding.
For longer paths, consider devising precalculated paths that are hardwired into the game.
Consider pre-processing your map to figure out what areas are inaccessible from the rest of the map. I call these areas "islands." In reality, they can be islands or any other area that is otherwise walled off and inaccessible. One of the downsides of A* is that if you tell it to look for paths to such areas, it will search the whole map, stopping only when every accessible square/node has been processed through the open and closed lists. That can waste a lot of CPU time. It can be prevented by predetermining which areas are inaccessible (via a flood-fill or similar routine), recording that information in an array of some kind, and then checking it before beginning a path search.
In a crowded, maze-like environment, consider tagging nodes that don't lead anywhere as dead ends. Such areas can be manually pre-designated in your map editor or, if you are ambitious, you could develop an algorithm to identify such areas automatically. Any collection of nodes in a given dead end area could be given a unique identifying number. Then you could safely ignore all dead ends when pathfinding, pausing only to consider nodes in a dead end area if the starting location or destination happen to be in the particular dead end area in question.
7. Maintaining the Open List: This is actually one of the most time consuming elements of the A* pathfinding algorithm. Every time you access the open list, you need to find the square that has the lowest F cost. There are several ways you could do this. You could save the path items as needed, and simply go through the whole list each time you need to find the lowest F cost square. This is simple, but really slow for long paths. This can be improved by maintaining a sorted list and simply grabbing the first item off the list every time you need the lowest F-cost square. When I wrote my program, this was the first method I used.

This will work reasonably well for small maps, but it isn't the fastest solution. Serious A* programmers who want real speed use something called a binary heap, and this is what I use in my code. In my experience, this approach will be at least 2-3 times as fast in most situations, and geometrically faster (10+ times as fast) on longer paths. If you are motivated to find out more about binary heaps, check out my article, Using Binary Heaps in A* Pathfinding.

Another possible bottleneck is the way you clear and maintain your data structures between pathfinding calls. I personally prefer to store everything in arrays. While nodes can be generated, recorded and maintained in a dynamic, object-oriented manner, I find that the amount of time needed to create and delete such objects adds an extra, unnecessary level of overhead that slows things down. If you use arrays, however, you will need to clean things up between calls. The last thing you will want to do in such cases is spend time zero-ing everything out after a pathfinding call, especially if you have a large map.

I avoid this overhead by creating a 2d array called whichList(x,y) that designates each node on my map as either on the open list or closed list. After pathfinding attempts, I do not zero out this array. Instead I reset the values of onClosedList and onOpenList in every pathfinding call, incrementing both by +5 or something similar on each path finding attempt. This way, the algorithm can safely ignore as garbage any data left over from previous pathfinding attempts. I also store values like F, G and H costs in arrays. In this case, I simply write over any pre-existing values and don't bother clearing the arrays when I'm done.

Storing data in multiple arrays consumes more memory, though, so there is a trade off. Ultimately, you should use whatever method you are most comfortable with.

8. Dijkstra's Algorithm: While A* is generally considered to be the best pathfinding algorithm (see rant above), there is at least one other algorithm that has its uses - Dijkstra's algorithm. Dijkstra's is essentially the same as A*, except there is no heuristic (H is always 0). Because it has no heuristic, it searches by expanding out equally in every direction. As you might imagine, because of this Dijkstra's usually ends up exploring a much larger area before the target is found. This generally makes it slower than A*.

So why use it? Sometimes we don't know where our target destination is. Say you have a resource-gathering unit that needs to go get some resources of some kind. It may know where several resource areas are, but it wants to go to the closest one. Here, Dijkstra's is better than A* because we don't know which one is closest. Our only alternative is to repeatedly use A* to find the distance to each one, and then choose that path. There are probably countless similar situations where we know the kind of location we might be searching for, want to find the closest one, but not know where it is or which one might be closest.

Further Reading
Okay, now you have the basics and a sense of some of the advanced concepts. At this point, I'd suggest wading into my source code. The package contains two versions, one in C++ and one in Blitz Basic. Both versions are heavily commented and should be fairly easy to follow, relatively speaking. Here is the link.

Sample Code: A* Pathfinder (2D) Version 1.9 If you do not have access to C++ or Blitz Basic, two small exe files can be found in the C++ version. The Blitz Basic version can be run by downloading the free demo version of Blitz Basic 3D (not Blitz Plus) at the Blitz Basic web site.
You should also consider reading through the following web pages. They should be much easier to understand now that you have read this tutorial.

Amit's A* Pages: This is a very widely referenced page by Amit Patel, but it can be a bit confusing if you haven't read this article first. Well worth checking out. See especially Amit's own thoughts on the topic.
Smart Moves: Intelligent Path Finding: This article by Bryan Stout at Gamasutra.com requires registration to read. The registration is free and well worth it just to reach this article, much less the other resources that are available there. The program written in Delphi by Bryan helped me learn A*, and it is the inspiration behind my A* program. It also describes some alternatives to A*.
Terrain Analysis: This is an advanced, but interesting, article by Dave Pottinger, a professional at Ensemble Studios. This guy coordinated the development of Age of Empires and Age of Kings. Don't expect to understand everything here, but it is an interesting article that might give you some ideas of your own. It includes some discussion of mip-mapping, influence mapping, and some other advanced AI/pathfinding concepts. Some other sites worth checking out:
aiGuru: Pathfinding
Game AI Resource: Pathfinding
GameDev.net: Pathfinding
Well, that's it. If you happen to write a program that uses any of these concepts, I'd love to see it. 