const test = require('ava')

const {roundedCuboid} = require('./index')

const geom3 = require('../geometry/geom3')

const comparePolygonsAsPoints = require('../../test/helpers/comparePolygonsAsPoints')

test('roundedCuboid (defaults)', t => {
  let obs = roundedCuboid()
  let pts = geom3.toPoints(obs)

  t.deepEqual(pts.length, 114)
})

test('roundedCuboid (options)', t => {
  // test segments
  let obs = roundedCuboid({segments: 8})
  let pts = geom3.toPoints(obs)
  let exp = []

  t.deepEqual(pts.length, 62)
  // test size
  obs = roundedCuboid({size: [8, 10, 12], segments: 8})
  pts = geom3.toPoints(obs)
  exp = [
    [ [ 4, 4.800000190734863, -5.800000190734863 ],
      [ 3.9414212703704834, 4.9414215087890625, -5.800000190734863 ],
      [ 3.9414212703704834, 4.9414215087890625, 5.800000190734863 ],
      [ 4, 4.800000190734863, 5.800000190734863 ] ],
    [ [ 3.9414212703704834, 4.9414215087890625, -5.800000190734863 ],
      [ 3.799999952316284, 5, -5.800000190734863 ],
      [ 3.799999952316284, 5, 5.800000190734863 ],
      [ 3.9414212703704834, 4.9414215087890625, 5.800000190734863 ] ],
    [ [ 3.799999952316284, 5, -5.800000190734863 ],
      [ -3.799999952316284, 5, -5.800000190734863 ],
      [ -3.799999952316284, 5, 5.800000190734863 ],
      [ 3.799999952316284, 5, 5.800000190734863 ] ],
    [ [ -3.799999952316284, 5, -5.800000190734863 ],
      [ -3.9414212703704834, 4.9414215087890625, -5.800000190734863 ],
      [ -3.9414212703704834, 4.9414215087890625, 5.800000190734863 ],
      [ -3.799999952316284, 5, 5.800000190734863 ] ],
    [ [ -3.9414212703704834, 4.9414215087890625, -5.800000190734863 ],
      [ -4, 4.800000190734863, -5.800000190734863 ],
      [ -4, 4.800000190734863, 5.800000190734863 ],
      [ -3.9414212703704834, 4.9414215087890625, 5.800000190734863 ] ],
    [ [ -4, 4.800000190734863, -5.800000190734863 ],
      [ -4, -4.800000190734863, -5.800000190734863 ],
      [ -4, -4.800000190734863, 5.800000190734863 ],
      [ -4, 4.800000190734863, 5.800000190734863 ] ],
    [ [ -4, -4.800000190734863, -5.800000190734863 ],
      [ -3.9414212703704834, -4.9414215087890625, -5.800000190734863 ],
      [ -3.9414212703704834, -4.9414215087890625, 5.800000190734863 ],
      [ -4, -4.800000190734863, 5.800000190734863 ] ],
    [ [ -3.9414212703704834, -4.9414215087890625, -5.800000190734863 ],
      [ -3.799999952316284, -5, -5.800000190734863 ],
      [ -3.799999952316284, -5, 5.800000190734863 ],
      [ -3.9414212703704834, -4.9414215087890625, 5.800000190734863 ] ],
    [ [ -3.799999952316284, -5, -5.800000190734863 ],
      [ 3.799999952316284, -5, -5.800000190734863 ],
      [ 3.799999952316284, -5, 5.800000190734863 ],
      [ -3.799999952316284, -5, 5.800000190734863 ] ],
    [ [ 3.799999952316284, -5, -5.800000190734863 ],
      [ 3.9414212703704834, -4.9414215087890625, -5.800000190734863 ],
      [ 3.9414212703704834, -4.9414215087890625, 5.800000190734863 ],
      [ 3.799999952316284, -5, 5.800000190734863 ] ],
    [ [ 3.9414212703704834, -4.9414215087890625, -5.800000190734863 ],
      [ 4, -4.800000190734863, -5.800000190734863 ],
      [ 4, -4.800000190734863, 5.800000190734863 ],
      [ 3.9414212703704834, -4.9414215087890625, 5.800000190734863 ] ],
    [ [ 4, -4.800000190734863, -5.800000190734863 ],
      [ 4, 4.800000190734863, -5.800000190734863 ],
      [ 4, 4.800000190734863, 5.800000190734863 ],
      [ 4, -4.800000190734863, 5.800000190734863 ] ],
    [ [ 4, 4.800000190734863, 5.800000190734863 ],
      [ 3.9414212703704834, 4.9414215087890625, 5.800000190734863 ],
      [ 3.9414212703704834, 4.800000190734863, 5.9414215087890625 ] ],
    [ [ 3.9414212703704834, 4.800000190734863, 5.9414215087890625 ],
      [ 3.9414212703704834, 4.9414215087890625, 5.800000190734863 ],
      [ 3.799999952316284, 4.9414215087890625, 5.9414215087890625 ] ],
    [ [ 3.9414212703704834, 4.9414215087890625, 5.800000190734863 ],
      [ 3.799999952316284, 5, 5.800000190734863 ],
      [ 3.799999952316284, 4.9414215087890625, 5.9414215087890625 ] ],
    [ [ -3.799999952316284, 5, 5.800000190734863 ],
      [ -3.9414212703704834, 4.9414215087890625, 5.800000190734863 ],
      [ -3.799999952316284, 4.9414215087890625, 5.9414215087890625 ] ],
    [ [ -3.799999952316284, 4.9414215087890625, 5.9414215087890625 ],
      [ -3.9414212703704834, 4.9414215087890625, 5.800000190734863 ],
      [ -3.9414212703704834, 4.800000190734863, 5.9414215087890625 ] ],
    [ [ -3.9414212703704834, 4.9414215087890625, 5.800000190734863 ],
      [ -4, 4.800000190734863, 5.800000190734863 ],
      [ -3.9414212703704834, 4.800000190734863, 5.9414215087890625 ] ],
    [ [ -4, -4.800000190734863, 5.800000190734863 ],
      [ -3.9414212703704834, -4.9414215087890625, 5.800000190734863 ],
      [ -3.9414212703704834, -4.800000190734863, 5.9414215087890625 ] ],
    [ [ -3.9414212703704834, -4.800000190734863, 5.9414215087890625 ],
      [ -3.9414212703704834, -4.9414215087890625, 5.800000190734863 ],
      [ -3.799999952316284, -4.9414215087890625, 5.9414215087890625 ] ],
    [ [ -3.9414212703704834, -4.9414215087890625, 5.800000190734863 ],
      [ -3.799999952316284, -5, 5.800000190734863 ],
      [ -3.799999952316284, -4.9414215087890625, 5.9414215087890625 ] ],
    [ [ 3.799999952316284, -5, 5.800000190734863 ],
      [ 3.9414212703704834, -4.9414215087890625, 5.800000190734863 ],
      [ 3.799999952316284, -4.9414215087890625, 5.9414215087890625 ] ],
    [ [ 3.799999952316284, -4.9414215087890625, 5.9414215087890625 ],
      [ 3.9414212703704834, -4.9414215087890625, 5.800000190734863 ],
      [ 3.9414212703704834, -4.800000190734863, 5.9414215087890625 ] ],
    [ [ 3.9414212703704834, -4.9414215087890625, 5.800000190734863 ],
      [ 4, -4.800000190734863, 5.800000190734863 ],
      [ 3.9414212703704834, -4.800000190734863, 5.9414215087890625 ] ],
    [ [ 3.799999952316284, 5, 5.800000190734863 ],
      [ -3.799999952316284, 5, 5.800000190734863 ],
      [ -3.799999952316284, 4.9414215087890625, 5.9414215087890625 ],
      [ 3.799999952316284, 4.9414215087890625, 5.9414215087890625 ] ],
    [ [ -4, 4.800000190734863, 5.800000190734863 ],
      [ -4, -4.800000190734863, 5.800000190734863 ],
      [ -3.9414212703704834, -4.800000190734863, 5.9414215087890625 ],
      [ -3.9414212703704834, 4.800000190734863, 5.9414215087890625 ] ],
    [ [ -3.799999952316284, -5, 5.800000190734863 ],
      [ 3.799999952316284, -5, 5.800000190734863 ],
      [ 3.799999952316284, -4.9414215087890625, 5.9414215087890625 ],
      [ -3.799999952316284, -4.9414215087890625, 5.9414215087890625 ] ],
    [ [ 4, -4.800000190734863, 5.800000190734863 ],
      [ 4, 4.800000190734863, 5.800000190734863 ],
      [ 3.9414212703704834, 4.800000190734863, 5.9414215087890625 ],
      [ 3.9414212703704834, -4.800000190734863, 5.9414215087890625 ] ],
    [ [ 4, -4.800000190734863, -5.800000190734863 ],
      [ 3.9414212703704834, -4.9414215087890625, -5.800000190734863 ],
      [ 3.9414212703704834, -4.800000190734863, -5.9414215087890625 ] ],
    [ [ 3.9414212703704834, -4.800000190734863, -5.9414215087890625 ],
      [ 3.9414212703704834, -4.9414215087890625, -5.800000190734863 ],
      [ 3.799999952316284, -4.9414215087890625, -5.9414215087890625 ] ],
    [ [ 3.9414212703704834, -4.9414215087890625, -5.800000190734863 ],
      [ 3.799999952316284, -5, -5.800000190734863 ],
      [ 3.799999952316284, -4.9414215087890625, -5.9414215087890625 ] ],
    [ [ -3.799999952316284, -5, -5.800000190734863 ],
      [ -3.9414212703704834, -4.9414215087890625, -5.800000190734863 ],
      [ -3.799999952316284, -4.9414215087890625, -5.9414215087890625 ] ],
    [ [ -3.799999952316284, -4.9414215087890625, -5.9414215087890625 ],
      [ -3.9414212703704834, -4.9414215087890625, -5.800000190734863 ],
      [ -3.9414212703704834, -4.800000190734863, -5.9414215087890625 ] ],
    [ [ -3.9414212703704834, -4.9414215087890625, -5.800000190734863 ],
      [ -4, -4.800000190734863, -5.800000190734863 ],
      [ -3.9414212703704834, -4.800000190734863, -5.9414215087890625 ] ],
    [ [ -4, 4.800000190734863, -5.800000190734863 ],
      [ -3.9414212703704834, 4.9414215087890625, -5.800000190734863 ],
      [ -3.9414212703704834, 4.800000190734863, -5.9414215087890625 ] ],
    [ [ -3.9414212703704834, 4.800000190734863, -5.9414215087890625 ],
      [ -3.9414212703704834, 4.9414215087890625, -5.800000190734863 ],
      [ -3.799999952316284, 4.9414215087890625, -5.9414215087890625 ] ],
    [ [ -3.9414212703704834, 4.9414215087890625, -5.800000190734863 ],
      [ -3.799999952316284, 5, -5.800000190734863 ],
      [ -3.799999952316284, 4.9414215087890625, -5.9414215087890625 ] ],
    [ [ 3.799999952316284, 5, -5.800000190734863 ],
      [ 3.9414212703704834, 4.9414215087890625, -5.800000190734863 ],
      [ 3.799999952316284, 4.9414215087890625, -5.9414215087890625 ] ],
    [ [ 3.799999952316284, 4.9414215087890625, -5.9414215087890625 ],
      [ 3.9414212703704834, 4.9414215087890625, -5.800000190734863 ],
      [ 3.9414212703704834, 4.800000190734863, -5.9414215087890625 ] ],
    [ [ 3.9414212703704834, 4.9414215087890625, -5.800000190734863 ],
      [ 4, 4.800000190734863, -5.800000190734863 ],
      [ 3.9414212703704834, 4.800000190734863, -5.9414215087890625 ] ],
    [ [ 3.799999952316284, -5, -5.800000190734863 ],
      [ -3.799999952316284, -5, -5.800000190734863 ],
      [ -3.799999952316284, -4.9414215087890625, -5.9414215087890625 ],
      [ 3.799999952316284, -4.9414215087890625, -5.9414215087890625 ] ],
    [ [ -4, -4.800000190734863, -5.800000190734863 ],
      [ -4, 4.800000190734863, -5.800000190734863 ],
      [ -3.9414212703704834, 4.800000190734863, -5.9414215087890625 ],
      [ -3.9414212703704834, -4.800000190734863, -5.9414215087890625 ] ],
    [ [ -3.799999952316284, 5, -5.800000190734863 ],
      [ 3.799999952316284, 5, -5.800000190734863 ],
      [ 3.799999952316284, 4.9414215087890625, -5.9414215087890625 ],
      [ -3.799999952316284, 4.9414215087890625, -5.9414215087890625 ] ],
    [ [ 4, 4.800000190734863, -5.800000190734863 ],
      [ 4, -4.800000190734863, -5.800000190734863 ],
      [ 3.9414212703704834, -4.800000190734863, -5.9414215087890625 ],
      [ 3.9414212703704834, 4.800000190734863, -5.9414215087890625 ] ],
    [ [ 3.9414212703704834, 4.800000190734863, 5.9414215087890625 ],
      [ 3.799999952316284, 4.9414215087890625, 5.9414215087890625 ],
      [ 3.799999952316284, 4.800000190734863, 6 ] ],
    [ [ -3.799999952316284, 4.9414215087890625, 5.9414215087890625 ],
      [ -3.9414212703704834, 4.800000190734863, 5.9414215087890625 ],
      [ -3.799999952316284, 4.800000190734863, 6 ] ],
    [ [ -3.9414212703704834, -4.800000190734863, 5.9414215087890625 ],
      [ -3.799999952316284, -4.9414215087890625, 5.9414215087890625 ],
      [ -3.799999952316284, -4.800000190734863, 6 ] ],
    [ [ 3.799999952316284, -4.9414215087890625, 5.9414215087890625 ],
      [ 3.9414212703704834, -4.800000190734863, 5.9414215087890625 ],
      [ 3.799999952316284, -4.800000190734863, 6 ] ],
    [ [ 3.799999952316284, 4.9414215087890625, 5.9414215087890625 ],
      [ -3.799999952316284, 4.9414215087890625, 5.9414215087890625 ],
      [ -3.799999952316284, 4.800000190734863, 6 ],
      [ 3.799999952316284, 4.800000190734863, 6 ] ],
    [ [ -3.9414212703704834, 4.800000190734863, 5.9414215087890625 ],
      [ -3.9414212703704834, -4.800000190734863, 5.9414215087890625 ],
      [ -3.799999952316284, -4.800000190734863, 6 ],
      [ -3.799999952316284, 4.800000190734863, 6 ] ],
    [ [ -3.799999952316284, -4.9414215087890625, 5.9414215087890625 ],
      [ 3.799999952316284, -4.9414215087890625, 5.9414215087890625 ],
      [ 3.799999952316284, -4.800000190734863, 6 ],
      [ -3.799999952316284, -4.800000190734863, 6 ] ],
    [ [ 3.9414212703704834, -4.800000190734863, 5.9414215087890625 ],
      [ 3.9414212703704834, 4.800000190734863, 5.9414215087890625 ],
      [ 3.799999952316284, 4.800000190734863, 6 ],
      [ 3.799999952316284, -4.800000190734863, 6 ] ],
    [ [ 3.9414212703704834, -4.800000190734863, -5.9414215087890625 ],
      [ 3.799999952316284, -4.9414215087890625, -5.9414215087890625 ],
      [ 3.799999952316284, -4.800000190734863, -6 ] ],
    [ [ -3.799999952316284, -4.9414215087890625, -5.9414215087890625 ],
      [ -3.9414212703704834, -4.800000190734863, -5.9414215087890625 ],
      [ -3.799999952316284, -4.800000190734863, -6 ] ],
    [ [ -3.9414212703704834, 4.800000190734863, -5.9414215087890625 ],
      [ -3.799999952316284, 4.9414215087890625, -5.9414215087890625 ],
      [ -3.799999952316284, 4.800000190734863, -6 ] ],
    [ [ 3.799999952316284, 4.9414215087890625, -5.9414215087890625 ],
      [ 3.9414212703704834, 4.800000190734863, -5.9414215087890625 ],
      [ 3.799999952316284, 4.800000190734863, -6 ] ],
    [ [ 3.799999952316284, -4.9414215087890625, -5.9414215087890625 ],
      [ -3.799999952316284, -4.9414215087890625, -5.9414215087890625 ],
      [ -3.799999952316284, -4.800000190734863, -6 ],
      [ 3.799999952316284, -4.800000190734863, -6 ] ],
    [ [ -3.9414212703704834, -4.800000190734863, -5.9414215087890625 ],
      [ -3.9414212703704834, 4.800000190734863, -5.9414215087890625 ],
      [ -3.799999952316284, 4.800000190734863, -6 ],
      [ -3.799999952316284, -4.800000190734863, -6 ] ],
    [ [ -3.799999952316284, 4.9414215087890625, -5.9414215087890625 ],
      [ 3.799999952316284, 4.9414215087890625, -5.9414215087890625 ],
      [ 3.799999952316284, 4.800000190734863, -6 ],
      [ -3.799999952316284, 4.800000190734863, -6 ] ],
    [ [ 3.9414212703704834, 4.800000190734863, -5.9414215087890625 ],
      [ 3.9414212703704834, -4.800000190734863, -5.9414215087890625 ],
      [ 3.799999952316284, -4.800000190734863, -6 ],
      [ 3.799999952316284, 4.800000190734863, -6 ] ],
    [ [ 3.799999952316284, 4.800000190734863, 6 ],
      [ -3.799999952316284, 4.800000190734863, 6 ],
      [ -3.799999952316284, -4.800000190734863, 6 ],
      [ 3.799999952316284, -4.800000190734863, 6 ] ],
    [ [ 3.799999952316284, -4.800000190734863, -6 ],
      [ -3.799999952316284, -4.800000190734863, -6 ],
      [ -3.799999952316284, 4.800000190734863, -6 ],
      [ 3.799999952316284, 4.800000190734863, -6 ] ]
  ]
  t.deepEqual(pts.length, 62)
  t.true(comparePolygonsAsPoints(pts, exp))

  // test roundRadius
  obs = roundedCuboid({size: [8, 10, 12], roundRadius: 2, segments: 8})
  pts = geom3.toPoints(obs)
  exp = [
    [ [ 4, 3, -4 ],
      [ 3.4142136573791504, 4.41421365737915, -4 ],
      [ 3.4142136573791504, 4.41421365737915, 4 ],
      [ 4, 3, 4 ] ],
    [ [ 3.4142136573791504, 4.41421365737915, -4 ],
      [ 2, 5, -4 ],
      [ 2, 5, 4 ],
      [ 3.4142136573791504, 4.41421365737915, 4 ] ],
    [ [ 2, 5, -4 ],
      [ -2, 5, -4 ],
      [ -2, 5, 4 ],
      [ 2, 5, 4 ] ],
    [ [ -2, 5, -4 ],
      [ -3.4142136573791504, 4.41421365737915, -4 ],
      [ -3.4142136573791504, 4.41421365737915, 4 ],
      [ -2, 5, 4 ] ],
    [ [ -3.4142136573791504, 4.41421365737915, -4 ],
      [ -4, 3, -4 ],
      [ -4, 3, 4 ],
      [ -3.4142136573791504, 4.41421365737915, 4 ] ],
    [ [ -4, 3, -4 ],
      [ -4, -3, -4 ],
      [ -4, -3, 4 ],
      [ -4, 3, 4 ] ],
    [ [ -4, -3, -4 ],
      [ -3.4142136573791504, -4.41421365737915, -4 ],
      [ -3.4142136573791504, -4.41421365737915, 4 ],
      [ -4, -3, 4 ] ],
    [ [ -3.4142136573791504, -4.41421365737915, -4 ],
      [ -2, -5, -4 ],
      [ -2, -5, 4 ],
      [ -3.4142136573791504, -4.41421365737915, 4 ] ],
    [ [ -2, -5, -4 ],
      [ 2, -5, -4 ],
      [ 2, -5, 4 ],
      [ -2, -5, 4 ] ],
    [ [ 2, -5, -4 ],
      [ 3.4142136573791504, -4.41421365737915, -4 ],
      [ 3.4142136573791504, -4.41421365737915, 4 ],
      [ 2, -5, 4 ] ],
    [ [ 3.4142136573791504, -4.41421365737915, -4 ],
      [ 4, -3, -4 ],
      [ 4, -3, 4 ],
      [ 3.4142136573791504, -4.41421365737915, 4 ] ],
    [ [ 4, -3, -4 ],
      [ 4, 3, -4 ],
      [ 4, 3, 4 ],
      [ 4, -3, 4 ] ],
    [ [ 4, 3, 4 ],
      [ 3.4142136573791504, 4.41421365737915, 4 ],
      [ 3.4142136573791504, 3, 5.41421365737915 ] ],
    [ [ 3.4142136573791504, 3, 5.41421365737915 ],
      [ 3.4142136573791504, 4.41421365737915, 4 ],
      [ 2, 4.41421365737915, 5.41421365737915 ] ],
    [ [ 3.4142136573791504, 4.41421365737915, 4 ],
      [ 2, 5, 4 ],
      [ 2, 4.41421365737915, 5.41421365737915 ] ],
    [ [ -2, 5, 4 ],
      [ -3.4142136573791504, 4.41421365737915, 4 ],
      [ -2, 4.41421365737915, 5.41421365737915 ] ],
    [ [ -2, 4.41421365737915, 5.41421365737915 ],
      [ -3.4142136573791504, 4.41421365737915, 4 ],
      [ -3.4142136573791504, 3, 5.41421365737915 ] ],
    [ [ -3.4142136573791504, 4.41421365737915, 4 ],
      [ -4, 3, 4 ],
      [ -3.4142136573791504, 3, 5.41421365737915 ] ],
    [ [ -4, -3, 4 ],
      [ -3.4142136573791504, -4.41421365737915, 4 ],
      [ -3.4142136573791504, -3, 5.41421365737915 ] ],
    [ [ -3.4142136573791504, -3, 5.41421365737915 ],
      [ -3.4142136573791504, -4.41421365737915, 4 ],
      [ -2, -4.41421365737915, 5.41421365737915 ] ],
    [ [ -3.4142136573791504, -4.41421365737915, 4 ],
      [ -2, -5, 4 ],
      [ -2, -4.41421365737915, 5.41421365737915 ] ],
    [ [ 2, -5, 4 ],
      [ 3.4142136573791504, -4.41421365737915, 4 ],
      [ 2, -4.41421365737915, 5.41421365737915 ] ],
    [ [ 2, -4.41421365737915, 5.41421365737915 ],
      [ 3.4142136573791504, -4.41421365737915, 4 ],
      [ 3.4142136573791504, -3, 5.41421365737915 ] ],
    [ [ 3.4142136573791504, -4.41421365737915, 4 ],
      [ 4, -3, 4 ],
      [ 3.4142136573791504, -3, 5.41421365737915 ] ],
    [ [ 2, 5, 4 ],
      [ -2, 5, 4 ],
      [ -2, 4.41421365737915, 5.41421365737915 ],
      [ 2, 4.41421365737915, 5.41421365737915 ] ],
    [ [ -4, 3, 4 ],
      [ -4, -3, 4 ],
      [ -3.4142136573791504, -3, 5.41421365737915 ],
      [ -3.4142136573791504, 3, 5.41421365737915 ] ],
    [ [ -2, -5, 4 ],
      [ 2, -5, 4 ],
      [ 2, -4.41421365737915, 5.41421365737915 ],
      [ -2, -4.41421365737915, 5.41421365737915 ] ],
    [ [ 4, -3, 4 ],
      [ 4, 3, 4 ],
      [ 3.4142136573791504, 3, 5.41421365737915 ],
      [ 3.4142136573791504, -3, 5.41421365737915 ] ],
    [ [ 4, -3, -4 ],
      [ 3.4142136573791504, -4.41421365737915, -4 ],
      [ 3.4142136573791504, -3, -5.41421365737915 ] ],
    [ [ 3.4142136573791504, -3, -5.41421365737915 ],
      [ 3.4142136573791504, -4.41421365737915, -4 ],
      [ 2, -4.41421365737915, -5.41421365737915 ] ],
    [ [ 3.4142136573791504, -4.41421365737915, -4 ],
      [ 2, -5, -4 ],
      [ 2, -4.41421365737915, -5.41421365737915 ] ],
    [ [ -2, -5, -4 ],
      [ -3.4142136573791504, -4.41421365737915, -4 ],
      [ -2, -4.41421365737915, -5.41421365737915 ] ],
    [ [ -2, -4.41421365737915, -5.41421365737915 ],
      [ -3.4142136573791504, -4.41421365737915, -4 ],
      [ -3.4142136573791504, -3, -5.41421365737915 ] ],
    [ [ -3.4142136573791504, -4.41421365737915, -4 ],
      [ -4, -3, -4 ],
      [ -3.4142136573791504, -3, -5.41421365737915 ] ],
    [ [ -4, 3, -4 ],
      [ -3.4142136573791504, 4.41421365737915, -4 ],
      [ -3.4142136573791504, 3, -5.41421365737915 ] ],
    [ [ -3.4142136573791504, 3, -5.41421365737915 ],
      [ -3.4142136573791504, 4.41421365737915, -4 ],
      [ -2, 4.41421365737915, -5.41421365737915 ] ],
    [ [ -3.4142136573791504, 4.41421365737915, -4 ],
      [ -2, 5, -4 ],
      [ -2, 4.41421365737915, -5.41421365737915 ] ],
    [ [ 2, 5, -4 ],
      [ 3.4142136573791504, 4.41421365737915, -4 ],
      [ 2, 4.41421365737915, -5.41421365737915 ] ],
    [ [ 2, 4.41421365737915, -5.41421365737915 ],
      [ 3.4142136573791504, 4.41421365737915, -4 ],
      [ 3.4142136573791504, 3, -5.41421365737915 ] ],
    [ [ 3.4142136573791504, 4.41421365737915, -4 ],
      [ 4, 3, -4 ],
      [ 3.4142136573791504, 3, -5.41421365737915 ] ],
    [ [ 2, -5, -4 ],
      [ -2, -5, -4 ],
      [ -2, -4.41421365737915, -5.41421365737915 ],
      [ 2, -4.41421365737915, -5.41421365737915 ] ],
    [ [ -4, -3, -4 ],
      [ -4, 3, -4 ],
      [ -3.4142136573791504, 3, -5.41421365737915 ],
      [ -3.4142136573791504, -3, -5.41421365737915 ] ],
    [ [ -2, 5, -4 ],
      [ 2, 5, -4 ],
      [ 2, 4.41421365737915, -5.41421365737915 ],
      [ -2, 4.41421365737915, -5.41421365737915 ] ],
    [ [ 4, 3, -4 ],
      [ 4, -3, -4 ],
      [ 3.4142136573791504, -3, -5.41421365737915 ],
      [ 3.4142136573791504, 3, -5.41421365737915 ] ],
    [ [ 3.4142136573791504, 3, 5.41421365737915 ],
      [ 2, 4.41421365737915, 5.41421365737915 ],
      [ 2, 3, 6 ] ],
    [ [ -2, 4.41421365737915, 5.41421365737915 ],
      [ -3.4142136573791504, 3, 5.41421365737915 ],
      [ -2, 3, 6 ] ],
    [ [ -3.4142136573791504, -3, 5.41421365737915 ],
      [ -2, -4.41421365737915, 5.41421365737915 ],
      [ -2, -3, 6 ] ],
    [ [ 2, -4.41421365737915, 5.41421365737915 ],
      [ 3.4142136573791504, -3, 5.41421365737915 ],
      [ 2, -3, 6 ] ],
    [ [ 2, 4.41421365737915, 5.41421365737915 ],
      [ -2, 4.41421365737915, 5.41421365737915 ],
      [ -2, 3, 6 ],
      [ 2, 3, 6 ] ],
    [ [ -3.4142136573791504, 3, 5.41421365737915 ],
      [ -3.4142136573791504, -3, 5.41421365737915 ],
      [ -2, -3, 6 ],
      [ -2, 3, 6 ] ],
    [ [ -2, -4.41421365737915, 5.41421365737915 ],
      [ 2, -4.41421365737915, 5.41421365737915 ],
      [ 2, -3, 6 ],
      [ -2, -3, 6 ] ],
    [ [ 3.4142136573791504, -3, 5.41421365737915 ],
      [ 3.4142136573791504, 3, 5.41421365737915 ],
      [ 2, 3, 6 ],
      [ 2, -3, 6 ] ],
    [ [ 3.4142136573791504, -3, -5.41421365737915 ],
      [ 2, -4.41421365737915, -5.41421365737915 ],
      [ 2, -3, -6 ] ],
    [ [ -2, -4.41421365737915, -5.41421365737915 ],
      [ -3.4142136573791504, -3, -5.41421365737915 ],
      [ -2, -3, -6 ] ],
    [ [ -3.4142136573791504, 3, -5.41421365737915 ],
      [ -2, 4.41421365737915, -5.41421365737915 ],
      [ -2, 3, -6 ] ],
    [ [ 2, 4.41421365737915, -5.41421365737915 ],
      [ 3.4142136573791504, 3, -5.41421365737915 ],
      [ 2, 3, -6 ] ],
    [ [ 2, -4.41421365737915, -5.41421365737915 ],
      [ -2, -4.41421365737915, -5.41421365737915 ],
      [ -2, -3, -6 ],
      [ 2, -3, -6 ] ],
    [ [ -3.4142136573791504, -3, -5.41421365737915 ],
      [ -3.4142136573791504, 3, -5.41421365737915 ],
      [ -2, 3, -6 ],
      [ -2, -3, -6 ] ],
    [ [ -2, 4.41421365737915, -5.41421365737915 ],
      [ 2, 4.41421365737915, -5.41421365737915 ],
      [ 2, 3, -6 ],
      [ -2, 3, -6 ] ],
    [ [ 3.4142136573791504, 3, -5.41421365737915 ],
      [ 3.4142136573791504, -3, -5.41421365737915 ],
      [ 2, -3, -6 ],
      [ 2, 3, -6 ] ],
    [ [ 2, 3, 6 ],
      [ -2, 3, 6 ],
      [ -2, -3, 6 ],
      [ 2, -3, 6 ] ],
    [ [ 2, -3, -6 ],
      [ -2, -3, -6 ],
      [ -2, 3, -6 ],
      [ 2, 3, -6 ] ]
  ]
  t.deepEqual(pts.length, 62)
  t.true(comparePolygonsAsPoints(pts, exp))
})