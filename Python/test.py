__author__ = 'Sina'


# your code goes here
dicts = [
    {'name': 'Michelangelo',
     'food': 'PIZZA'},
    {'name': 'Garfield',
     'food': 'lasanga'},
    {'name': 'Walter',
     'food': 'pancakes'},
    {'name': 'Galactus',
     'food': 'worlds'}
]

string = "Hi, I'm {name} and I love to eat {food}!"
#
# def string_factory(d, s):
#   string_list = []
#
#   for e in d:
#     string_list.append(s.format(**e))
#
#   return string_list
#
# # for k
# # print(test)
#
# d = {'x': 1, 'y': 2, 'z': 3}
#
# # for key in d:
# #     print(key, 'corresponds to', d[key])
#
# # for idx in dicts:
# #     print(dicts[idx]['name'])
#
# class Store:
#   open = 9
#   close = 5
#
#   def hours(self, open,close):
#     return "We're open from {open} to {close}".format(open, close)
#
# newStore = Store []
# print(newStore.hours(9,5))

import math

def square(input):
    return [i**2 for i in input]



    # spaceholder = []
    # for idx in input:
    #     a = idx*idx
    #     spaceholder.append(a)
    #     # a = idx*idx
    #     # spaceholder.append(a)
    #
    # return spaceholder





print(square([6,8,4]))
