=begin
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b.

array_diff([1,2],[1]) == [2]

If a value is present in b, all of its occurrences must be removed from the other:

array_diff([1,2],[1]) == [2]
=end

# LONG VERSION
def array_diff(a, b)
    b.each { |number| a.delete(number) }
    a
  end

## ONE LINER
def array_diff(a, b)
    a - b
end

=begin
Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.
=end

# MY VERSION

def list names
  output = ''
  last = names.length() - 1
  for i in 0..last
    case i
    when 0    
      output << names[0][:name]
    when last
      output << ' & ' + names[i][:name]
    else
      output << ', ' + names[i][:name]   
      end
    end
  output
end



# TOP KATA
def list names
  names = names.map { |name| name[:name] }
  last_name = names.pop
  return last_name.to_s if names.empty?
  "#{names.join(', ')} & #{last_name}"
end